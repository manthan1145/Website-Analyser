

                    $(document).on("click",".contact-profile",function() {

               
                              $('#frame').hide();
                              $('.conversation_show_icon').show();

                })



            $(document).on("click",".conversation_show_icon",function() {

                    $('#frame').show();
                    $('.conversation_show_icon').hide();

            })



            $(document).on('keypress','.user_message',function(e){
                  if(e.which == 13){//Enter key pressed
                      $('.submit_user_message').click();//Trigger search button click event
                  }
              });


            $(document).on("click",".submit_user_message",function() {

                

                    msg=$('.user_message').val();
                    if (msg === 'NULL' || msg === '' || msg === null )
                    {
                      $('.user_message').focus()
                    }

                    else {


                      question='<li class="sent"><p>'+msg+'</p></li>'

                      $("#conversbetween").append(question);
                     loader='<li class=" replies loader"><p><img src="/images/typing_loader.gif" alt="" /> </p></li>'
                        $("#conversbetween").append(loader);
                 
                       $('.messages').scrollTop($('.messages')[0].scrollHeight);
                       $('.user_message').val('')


                      var proxy = 'https://cors-anywhere.herokuapp.com/';

                            $.ajax({

                               headers: {
                                      'Content-Type': 'application/x-www-form-urlencoded'
                                        },
                                            dataType: "json",

                              url: proxy+"http://192.81.134.211:9001/chatbot/", 
                              method:'POST',
                              data: {'code':'datadata','question':msg},

                              success: function(result)
                              {
                                
                               answer= result['answer']

                               $('.loader').remove();
                               answer='<li class="replies"><p>'+answer+'</p></li>'
                               $("#conversbetween").append(answer);
                               
                                }
                                    })

                        }

                      });
