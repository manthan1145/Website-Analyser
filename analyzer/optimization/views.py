from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.views import APIView
from django.http import HttpResponse
import requests,random,string,os
import json
from bs4 import BeautifulSoup
import pandas as pd
from random import randint
from fake_useragent import UserAgent
import urllib
from css_html_js_minify import process_single_html_file, process_single_js_file, process_single_css_file, html_minify, js_minify, css_minify
# Create your views here.

class BasicView(TemplateView):
	template_name = 'homepage.html'
	
	# def get_context_data(self, *args, **kwargs):
	# 	return ('success')
	def post(self, request, *args, **kwargs):
		content = {}
		url = request.POST['url']		
		headers = {
    			'User-Agent':UserAgent().random,
		}
		
		# #SSL verification and generating a proper url
		try:
			response = requests.get(url, headers =headers)
			page_time  = requests.get(url).elapsed.total_seconds()
			content['error']  = 'No'
		except:
			try:
				url = url.replace('http','https')
				response = requests.get(url,headers=headers)
				page_time  = requests.get(url).elapsed.total_seconds()
				content['error'] = 'No'
			except:
				content['error'] = '404'
				return HttpResponse(json.dumps(content))

		if 'https' in response.url:
			content['ssl'] = "YES"
		else:
			content['ssl'] = 'No'

		print("The main URL is ",response.url)
		print ('\n\n')
		print (content['ssl'],"\n\n")
		url = response.url
		
		html = BeautifulSoup(response.text,'html5lib')


		#Images count and size of all images
		
		images = html.findAll('img')
		size_of_images = 0
		print('Total Number of images-------',len(images))
		success = 0
		for im in images:

			try:
				img = im.get('src')
					
				if 'http' in img:
					img_url = img
				else:				
					img_url = url + img				
				
				try:	
					if '..' in img_url:
						img_url = img_url.replace('..','')			
					path = requests.get(img_url)
					size = len(path.content)
					size_of_images = size_of_images + int(size)	
					success = success + 1
				except:		
					
					url_img = str('https:/' + img)
					
					try:
						path = requests.get(url_img)
						size = len(path.content)
						size_of_images = size_of_images + int(size)	
						success = success + 1
					except:
						pass
			except Exception as e:
				
				continue
		
		print("\nSuccess----------",success)
		


		
		



		# css inspection



		css_links=[link.get('href') for link in html.findAll("link") if "stylesheet" in link.get("rel", [])]
		
		# check preload
		preloaded_urls=[link for link in html.findAll("link") if "preload" in link.get("rel", [])]
		if preloaded_urls:
			preloaded_urls='ok'
		else:
			preloaded_urls='notok'


		
		# strict use of @import 
		import_css_list=[]
		import_text='@import'
		dir_name = ''.join(random.choice(string.ascii_letters) for m in range(5)) 
		css_path = '/home/ip-d/Documents/Analyzer/analyzer/optimization/CSS_FILES/'+dir_name+'/'
		if not os.path.exists(css_path):
			os.makedirs(css_path)

		min_css_list = []
		for links in css_links:			
			try:
				if links.startswith('/'):
					link=str(url)+links
				elif links.startswith('http'):
					link=links
				else:
					link=str(url)+links
				if '.min' in link:
					pass
				else:
					
					css_url=requests.get(link,headers=headers)

					temp_html = BeautifulSoup(css_url.text,'html5lib')					
					import_output=temp_html.findAll(import_text)

					if len(import_output)>0:
						import_css_list.append(link)
					
					# minify css
					temp_dict = {}
					links_split = links.split('/')					
					css_file_name = ''
					for x in links_split:
						if '.css' in x:
							css_file_name = x
					if css_file_name.endswith('.css'):
						new_path = css_path+css_file_name
					else:
						new_path = css_path+css_file_name+'.css'

					with open(new_path,'wb') as f:
						f.write(css_url.content)
						f.close()
					simple_css_info = os.stat(new_path)
					simple_css_size = simple_css_info.st_size	

					min_path = process_single_css_file(new_path, overwrite=False)		
					min_css_info = os.stat(min_path)
					min_size = min_css_info.st_size
					if min_size < simple_css_size:
						temp_dict['path'] = min_path
						temp_dict['_size'] = str(min_size / 1000) + 'KB'
						min_css_list.append(temp_dict)
			except Exception as e:
				print(e)
				pass
		print("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",min_css_list)
		
		#check if css is above the body and if it is in the body then count
		for_css_html = html
		body_for_css = for_css_html.find('body').extract()
		style_tag_css = body_for_css.findAll('style')
		link_css=[link["href"] for link in body_for_css.findAll("link") if "stylesheet" in link.get("rel", [])]
		total_css_inbody = len(style_tag_css) + len(link_css)
		
			




	
		#Js inspection
		
		js_files_list = []
		js_in_page = []
		html = BeautifulSoup(response.text,'html5lib')
		for link in html.findAll("script"):
			if link.get("src", []):
				js_files_list.append(link.get('src'))
			else:
				js_in_page.append(link)
		print(js_files_list)
		#Counting document.write in scripts
		count_write_list = []
		for js in js_in_page:
			str_js = str(js)
			if 'document.write' in str_js:
				count_write_list.append(js)
		
		

		#finding plugins
		count_plugins_list = []
		for js in html.findAll('script'):
			str_js = str(js)
			if 'plugins' in str_js:
				count_plugins_list.append(js)

		


		# Check if script is placed before body tag
		headers = {
    			'User-Agent':UserAgent().random,
		}
		response = requests.get(url, headers = headers)
		html1 = BeautifulSoup(response.text,'html5lib')
		html1.find('body').extract()
		scripts_before_body = html1.findAll('script')
		scripts_without_body = len(scripts_before_body)




		#minify  JS
		
		dir_name = ''.join(random.choice(string.ascii_letters) for m in range(5)) 
		js_path = '/home/ip-d/Documents/Analyzer/analyzer/optimization/JS_FILES/'+dir_name+'/'
		if not os.path.exists(js_path):
			os.makedirs(js_path)

		min_js_list = []
		
		for links in js_files_list:		
			try:
				if str(links).startswith('/'):
					link=str(url)+links
				elif links.startswith('http'):
					link=links	
				else:
					link=str(url)+links
				if '.min' in str(link):
					pass
				else:
					# minify js
					js_url = requests.get(link,headers=headers) 
					temp_dict = {}
					links_split = str(links).split('/')					
					js_file_name = ''
					
					for x in links_split:
						if '.js' in x:
							js_file_name = x
					if js_file_name.endswith('.js'):
						new_path = js_path+js_file_name
					else:
						new_path = js_path+js_file_name+'.js'
					
					with open(new_path,'wb') as f:
						f.write(js_url.content)
						f.close()
					simple_js_info = os.stat(new_path)
					simple_js_size = simple_js_info.st_size	
					min_path = process_single_js_file(new_path, overwrite=False)		
					min_js_info = os.stat(min_path)
					min_size = min_js_info.st_size
					if min_size < simple_js_size:
						temp_dict['path'] = min_path
						temp_dict['_size'] = str(min_size / 1000) + 'KB'
						min_js_list.append(temp_dict)
			except Exception as e:
				print(e)
				pass


		#Content Checking 


		#Redirection Count		
		red_count = len(response.history)

		#Check for cookies
		cookies = response.cookies
		cookies_status = ""
		if len(cookies) == 0:
			cookies_status = 'No'
		else:
			cookies_status = 'Yes'

		#Check Headers and its length
		url_headers = response.headers

		#check for etag in headers
		etag_status = ''
		try:
			if url_headers['Etag']:
				etag_status = 'Yes'
		except:
			etag_status = 'No'


		#Check for charset in metatag
		meta_tags = html.findAll('meta')
		meta_tags_list = []
		for tag in meta_tags:
			if tag.get('charset'):
				meta_tags_list.append(tag)


		print("\n\n")
		# content['js_files'] = len(js_files_list)
		# content['js_in_page'] = len(js_in_page)
		content['page_load'] = page_time		
		# content['css_files'] = len(css_files)
		# content['css_inpage'] = len(css_inpage)
		content['img_count'] = len(images)
		content['img_size']  = str(size_of_images / 1000) + ' KB'
		# content['size_of_css'] = str(size_of_css / 1000) + ' KB'		

		content['count_write'] = len(count_write_list)
		content['count_plugins'] = len(count_plugins_list)
		content['red_count'] = red_count
		content['scripts_before_body'] = scripts_without_body
		content['css_in_body'] = total_css_inbody
		content['min_css_list'] = min_css_list
		content['import_css_list'] = len(import_css_list)
		content['min_js_list'] = min_js_list
		content['cookies_status'] = cookies_status
		content['headers'] = len(url_headers)
		content['etag_status'] = etag_status
		content['meta_tags'] = len(meta_tags_list)
		return HttpResponse(json.dumps(content))


	