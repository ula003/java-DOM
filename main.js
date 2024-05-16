// *// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = []

let unSuccessful = []

let taxes = 0

let taxesMax = {}

let taxesMin = {}

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            { title: 'Salaries', total: 125000 },

            { title: 'Utilites', total: 18000, },

            { title: 'Rent', total: 258000 }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]

// *// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// *// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ percent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// *// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// *// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// *// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// *// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*


const setup = () => {
    bank.forEach((company) => {
        const totalMonthlyExpenses = company.expensesPerYear.reduce((total, expense) => total + expense.total / 12, 0);
        company.expensesPerMonth = totalMonthlyExpenses;
    });
    bank.forEach(company => {
        company.percent = (company.expensesPerMonth /(company.budget/12)*100)
    });
    bank.forEach(company=>{
        const totalTax = company.budget * (company.tax/100)
        company.leftBudget = company.budget - company.expensesPerMonth - totalTax ;   
    })
    let totalLeftBudget = 0;
    bank.forEach((company) =>{
        totalLeftBudget =+ company.leftBudget
    })
    let avgLeftBudget = +totalLeftBudget/+bank.length

    bank.forEach((company)=>{
        company.leftBudget < +totalLeftBudget ? successful.push(company):unSuccessful.push(company)
    })

    
    taxes = bank.reduce((total, company) =>total + (company.budget * (company.tax / 100)),0)
    // 5 задание
    taxesMax = bank.reduce((max, company) => (company.tax > max.tax ? company : max), bank[0]);
    taxesMin = bank.reduce((min, company) => (company.tax < min.tax ? company : min), bank[0]);

    // 6 задание
    bank.forEach(company => {
        const taxAmount = company.budget * (company.tax / 100);
        company.totalMoney = company.budget - taxAmount - company.expensesPerMonth;
    });
    bank.forEach(company=> console.log(company))
    console.log(taxes);
    console.log(taxesMax);
    console.log(taxesMin);
    console.log(totalLeftBudget)
    console.log(avgLeftBudget);
    console.log(successful);
    console.log(unSuccessful);
}
setup();


