const countdown = document.getElementById('countdown');

function display(num, callback) {
    countdown.innerHTML = num;
    setTimeout(callback, 1000);
}

display(10, function() {
    display(9, function() {
        display(8, function() {
            display(7, function() {
                display(6, function() {
                    display(5, function() {
                        display(4, function() {
                            display(3, function() {
                                display(2, function() {
                                    display(1, function() {
                                        display("Happy Independence Day", function() {});
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
