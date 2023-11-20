$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", ""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


    var date = new Date();
    var res = date.getFullYear();
    document.getElementById("test").innerHTML = res;

    
    const terminal = document.getElementById('terminal');
        const output = document.getElementById('output');
        const input = document.getElementById('input');

        input.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                const command = input.value;
                input.value = '';

                // Display the command
                output.innerHTML += `<div><span style="color: #00FFFF;">&gt;&gt;</span> ${command}</div>`;

                // Process the command
                const answer = processCommand(command);

                // Display the answer
                output.innerHTML += `<div>${answer}</div>`;

                // Scroll to the bottom of the terminal
                terminal.scrollTop = terminal.scrollHeight;
            }
        });
        // function processCommand(command) {

        //     if (command.toLowerCase().startsWith('who are you')) {
        //         return "I am Rafi Ahmed, a software engineer.";
        //     }else if(command.toLowerCase().startsWith('do you know rafi')){
        //         return "Yes,I know him.He is my creator.and He is a undergradute student at Sonargaon University."
        //     }
        //      else {
        //         return "Command not recognized. Type 'who are' to learn about me.";
        //     }
        // }

        function processCommand(command) {
            const lowerCaseCommand = command.toLowerCase();
        
            if (lowerCaseCommand.includes('who are you')) {
                return "I'm Rafi Ahmed, a software engineer. How can I assist you today?";
            } else if (lowerCaseCommand.includes('do you know rafi')) {
                return "Yes, I know Rafi. He's my creator and an graduate student at North South University. How can I help you further?";
            } else {
                return "I'm not sure I understand. Please feel free to ask any questions or provide more details, and I'll do my best to assist you.";
            }
        }
        
        // Example usage:
        const command1 = "Who are you?";
        const response1 = processCommand(command1);
        console.log(response1);
        
        const command2 = "Do you know Rafi?";
        const response2 = processCommand(command2);
        console.log(response2);
        
        const command3 = "Tell me about software development.";
        const response3 = processCommand(command3);
        console.log(response3);
        