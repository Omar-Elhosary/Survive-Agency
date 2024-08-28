const monthYearElement = document.querySelector('.month-year');
    const daysElement = document.querySelector('.days');

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();

   
    function renderCalendar(month, year) {
        
        daysElement.innerHTML = '';

       
        const firstDay = new Date(year, month).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate(); 

        
        monthYearElement.textContent = currentDate.toLocaleString('default', { month: 'long' }) + ' ' + year;

       
        for (let i = 0; i < firstDay; i++) {
            const emptySpan = document.createElement('span');
            emptySpan.classList.add('day');
            daysElement.appendChild(emptySpan);
        }

        
        for (let day = 1; day <= daysInMonth; day++) {
            const daySpan = document.createElement('span');
            daySpan.classList.add('day');
            daySpan.textContent = day;
            daysElement.appendChild(daySpan);
        }
    }


    renderCalendar(currentMonth, currentYear);