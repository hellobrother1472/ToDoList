function day(){

    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    
    const today = new Date();
    
    return today.toLocaleDateString("en-US", options);
}


module.exports.day = day;