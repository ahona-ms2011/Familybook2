var images = ["https://th.bing.com/th/id/OIP.Co5vHPeUmSZKk5y3k5rXjAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.25&pid=1.7","blob:https://web.whatsapp.com/ed0f7734-577f-4f12-8206-5cab04f58842", "blob:https://web.whatsapp.com/25098261-3391-4394-9e21-80afa381c8c6" , "blob:https://web.whatsapp.com/ab7d0334-d128-4852-a08e-e01a8d0c63cf"];
            var names = ["Fmaily Book","My Parents", "My Grandparents", "My aunt, my dog and I"];
            function update()
            {
                var i = 0;
                i++;
                var numbers_of_family_member_in_array = 4
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            
            }
