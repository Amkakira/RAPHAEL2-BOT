
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ميتسوري$/i.test(m.text)) { 
     responses = [ 
 '*هــا؟!*'  
     ];
    
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى النقطه*',  
     ];
    }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*شــوفــلــك كــلـــبــه*',  
     ];

        }else if (/^استماره$/i.test(m.text)) { 
     responses = [ 
       '*اكتب.استماره*',  
     ];
    }else if (/^استمارة$/i.test(m.text)) { 
     responses = [ 
       '*اكتب.استماره*',  
     ];
    }else if (/^.استمارة$/i.test(m.text)) { 
     responses = [ 
       '*اكتب.استماره وليس .استمارة*',  
     ];
        }else if (/^.مطور$/i.test(m.text)) { 
     responses = [ 
       '*حط ال*',  
     ];
       
    }else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
       '*حبك برص احول🦎*',  
     ];
        }else if (/^بنتي$/i.test(m.text)) { 
     responses = [ 
       '*انا بنت اكيرا*',  
     ];
        
          }else if (/^.مهام$/i.test(m.text)) { 
     responses = [ 
       '.المهام',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
