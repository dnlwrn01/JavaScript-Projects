function birthMonth() {
    var userSign = {
        January : 'Capricorn',
        Febuary : 'Aquarius',
        March : 'Pisces',
        April : 'Aries',
        May : 'Taurus', 
        June : 'Gemini',
        July : 'Cancer',
        August : 'Leo',
        Septemmber : 'Virgo',
        October: 'Libra',
        November : 'Scorpio',
        December : 'Sagittarius',
        Month: 'Remove From Dictionary' //test removing a KVP
    };
    delete userSign.Month;
    document.getElementById('user-sign').innerHTML = userSign.Month; //diplaying removed item returns undefined
}

