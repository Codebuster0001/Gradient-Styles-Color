document.addEventListener('DOMContentLoaded', function() {
    const generatorBtn = document.querySelector('.generator');
    const copyBtn = document.querySelector('.copy');
    const gradientBox = document.querySelector('.gradient_box');
    const gradientCode = document.getElementById('gradient_code');
    
    generatorBtn.addEventListener('click', function() {
        const selectDirection = document.querySelector('.select_direction select').value;
        const selectGradient = document.querySelector('.select_gradient select').value;
        const colors = document.querySelectorAll('.colors input[type="color"]');
        let colorValues = Array.from(colors).map(color => color.value);

            // Generate gradient style
        let gradientStyle = '';
        switch(selectGradient) {
            case "linear":
                gradientStyle = `linear-gradient(${selectDirection}, ${colorValues.join(', ')})`;
                break;
            case "radial":
                gradientStyle = `radial-gradient(circle, ${colorValues.join(', ')})`;
                break;
            case "repeating-linear":
                gradientStyle = `repeating-linear-gradient(${selectDirection} , ${colorValues.join(', ')})`;
                break;
            case "repeating-radial":
                gradientStyle = `repeating-radial-gradient(circle at 30% 50%, ${colorValues[0]} 0, ${colorValues[0]} 10%, ${colorValues[1]} 10%, ${colorValues[1]} 20%)`;
                 break;
           
            case "radial-ellipse":
                gradientStyle = `radial-gradient(ellipse at center, ${colorValues.join(', ')})`;
                break;
            
            case "color-stops":
                let colorStops = colorValues.map((color, index) => `${color} ${index * (100 / (colorValues.length - 1))}%`);
                gradientStyle = `linear-gradient(${selectDirection}, ${colorStops.join(', ')})`;
                break;
        }
       
        // Apply gradient to gradient box and body
        gradientBox.style.backgroundImage = gradientStyle;
        document.body.style.backgroundImage = gradientStyle;

        // Update textarea with CSS code
        gradientCode.textContent = `background-image: ${gradientStyle};`;
    });

    // Copy CSS code
    copyBtn.addEventListener('click', function() {
       if (gradientCode.textContent) {
           navigator.clipboard.writeText(gradientCode.textContent);
           alert('CSS code copied to clipboard');
        }
        else {
            alert('No CSS code to copy');
        }
    });


});




