    document.querySelector(".control_btns span").onclick=function(){
    let name=prompt("what is your name ?") ;

    if(name == ""){
        document.querySelector(".name span").innerHTML="UnKnown";
    }
    else{
        document.querySelector(".name span").innerHTML=name;
    }
        document.querySelector(".control_btns").style.display="none"; 
        // document.querySelector(".control_btns").remove();  هو هو نفس السطر (ده عشان اشيل الديف اللي جواه استارت جيم)

}

        let duration=1000;
        let block_container = document.querySelector(".memory_game_blocks");
        let blocks = Array.from(block_container.children); // حطلي كل اللي جوا الكلاس ده ف اراي
        let order_range = [...Array(blocks.length).keys()]; // عملت اراي وحطيت فيه انكسات الاراي اللي فوق اللي هما من 0 ل 19
        // let order_range = Array.from(Array(blocks.length).keys()); نفس السطر اللي فوقيه بس بطريقة تانيه
        
         shuffle(order_range)

         blocks.forEach((block,index)=>{ // عملت لوب هتلوب علي كل عنصر والاندكس بتاعه
         block.style.order=order_range[index]; //css بحط ل كل عنصر اوردر بيساوي الاندكس اللي هيتغير عشوائي تحت الاوردر ده بغيره ف ال 
             
         block.addEventListener('click',function(){ //المربع اللي انا واقف عليه اول ما ادوس عليه حطله كلاس اللي اسمه اس فليب
            flip_block(block);
         });
        });


    function flip_block(select_block){ // هاضيف كلاس الفليب
        select_block.classList.add('is_flipped');
        let flippedNum=blocks.filter(flippedBlock=>flippedBlock.classList.contains('is_flipped'));//عدد المربعات اللي عليها كلاس اس فليبد 
        if (flippedNum.length === 2) {
           stopClicing();
           checkMatch(flippedNum[0] , flippedNum[1]);
        }
    }


    function stopClicing(){
        block_container.classList.add("no_clicking");
        setTimeout(() =>{
            block_container.classList.remove("no_clicking");
        },duration);
    }



    function checkMatch(firstBlock , secondBlock){
        let triesElemnt = document.querySelector(".tries span") ;
        if(firstBlock.dataset.technology === secondBlock.dataset.technology){
            firstBlock.classList.remove('is_flipped')
            secondBlock.classList.remove('is_flipped')

            setTimeout(()=>{
                firstBlock.style.display='none';
                secondBlock.style.display='none';
            },duration)

            firstBlock.classList.add('has_match')
            firstBlock.classList.add('has_match')
        }
        else{
            triesElemnt.innerHTML++ ;  
            setTimeout(()=>{
                firstBlock.classList.remove('is_flipped')
                secondBlock.classList.remove('is_flipped')
            },duration)
            
        }
    }


    function shuffle(array){ // الترتيب العشوائي
        let size = array.length ,
        temp , random ;
        while(size > 0)
    {
            random = Math.floor(Math.random() * size) // بجيب رقم عشوائي واضربه ف السايز عشان مايطلعش برا الرينج من 0 ل19
            size-- ;

            /* باعمل اسواب بين المربعات عشان تتبدل بشكل عشوائي كل مرة اعمل ريفريش*/ 
            temp = array[size];
            array[size] = array[random];
            array[random] = temp ;     
    }
            return array;
    }
