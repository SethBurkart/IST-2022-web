// Get All elements that need to be animated with a class="animate ..."
const targets = document.getElementsByClassName('animate')

// Create a function that will be called when the element goes in or out of the window
const animate = target => {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            // Set the target to a variable
            const entered = entry.target;
            // Get what classes to add to the target
            const add_class = entered.getAttribute('add-class');
            const remove_class = entered.getAttribute('remove-class');
            const delay = entered.getAttribute('delay');

            // Run Code after delay
            setTimeout(() => {
                // If in view add the class
                if (entry.isIntersecting) {
                    entered.classList.add(add_class);
                    entered.classList.remove(remove_class);
                }
                // Else remove it (so that when it goes out of view it removes it)
                else {
                    entered.classList.remove(add_class);
                    entered.classList.add(remove_class);
                }
            }, delay)
        });
    });
    // Observe the targets in order to run this code
    io.observe(target);
};

// for loop used bc forEach wasnt working
// runs animate() for every single one of the targets

for (var value of targets) {
    console.log(value);
    animate(value);
}


//targets.forEach(animate());