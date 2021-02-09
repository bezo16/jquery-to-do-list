var inputValue=''
var prependText=''
var time = new Date()
 $(document).ready(() => {
    $(".inputsubmit").click(() =>{
        inputValue = $(".inputtext").val()
        if(inputValue.length > 9)
        { 
          prependText= '<div class="todoItem">'+ time.getHours() + time.getMinutes() + inputValue   + '<div class="absolutediv"> zmaž ma </div>' +  '<hr>' +'</div>' 
          console.log(prependText)
          $(".tasks").prepend(prependText)
          $(".absolutediv").click((e) =>{
            $(e.target).parent().remove()
        })
          
        }
        $(".inputtext").val('')


      
    })
   
    
 })















