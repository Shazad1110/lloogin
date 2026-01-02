// داتابەیسی سیستەم لە میمۆری
let database = {
    employees: [],
    customers: [],
    debts: [],
    sales: [],
    medicines: [],
    companies: [],
    sellerPayments: [],
    rentPayments: []
};

// کردنەوەی Modal
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    loadData(id);
}

// داخستنی Modal
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// زیادکردنی کارمەند
function addEmployee() {
    const name = document.getElementById('emp-name').value;
    const position = document.getElementById('emp-position').value;
    const salary = document.getElementById('emp-salary').value;
    const phone = document.getElementById('emp-phone').value;
    
    if(name && position) {
        const emp = {
            id: Date.now(),
            name: name,
            position: position,
            salary: salary,
            phone: phone
        };
        database.employees.push(emp);
        loadData('employees');
        clearInputs(['emp-name', 'emp-position', 'emp-salary', 'emp-phone']);
    } else {
        alert('تکایە ناو و پۆست پڕبکەرەوە!');
    }
}

// زیادکردنی کڕیار
function addCustomer() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;
    
    if(name) {
        const cust = {
            id: Date.now(),
            name: name,
            phone: phone,
            address: address
        };
        database.customers.push(cust);
        loadData('customers');
        clearInputs(['cust-name', 'cust-phone', 'cust-address']);
    } else {
        alert('تکایە ناو پڕبکەرەوە!');
    }
}

// زیادکردنی قەرز
function addDebt() {
    const customer = document.getElementById('debt-customer').value;
    const amount = document.getElementById('debt-amount').value;
    const date = document.getElementById('debt-date').value;
    
    if(customer && amount) {
        const debt = {
            id: Date.now(),
            customer: customer,
            amount: amount,
            date: date
        };
        database.debts.push(debt);
        loadData('debt');
        clearInputs(['debt-customer', 'debt-amount', 'debt-date']);
    } else {
        alert('تکایە ناوی کڕیار و بڕ پڕبکەرەوە!');
    }
}

// زیادکردنی فرۆشتن
function addSale() {
    const medicine = document.getElementById('sale-medicine').value;
    const quantity = document.getElementById('sale-quantity').value;
    const price = document.getElementById('sale-price').value;
    const date = document.getElementById('sale-date').value;
    
    if(medicine && quantity && price) {
        const sale = {
            id: Date.now(),
            medicine: medicine,
            quantity: quantity,
            price: price,
            date: date
        };
        database.sales.push(sale);
        loadData('sales');
        clearInputs(['sale-medicine', 'sale-quantity', 'sale-price', 'sale-date']);
    } else {
        alert('تکایە هەموو خانەکان پڕبکەرەوە!');
    }
}

// زیادکردنی دەرمان
function addMedicine() {
    const name = document.getElementById('med-name').value;
    const company = document.getElementById('med-company').value;
    const quantity = document.getElementById('med-quantity').value;
    const buyPrice = document.getElementById('med-buy-price').value;
    const sellPrice = document.getElementById('med-sell-price').value;
    const expiry = document.getElementById('med-expiry').value;
    
    if(name && quantity) {
        const med = {
            id: Date.now(),
            name: name,
            company: company,
            quantity: quantity,
            buyPrice: buyPrice,
            sellPrice: sellPrice,
            expiry: expiry
        };
        database.medicines.push(med);
        loadData('medicines');
        clearInputs(['med-name', 'med-company', 'med-quantity', 'med-buy-price', 'med-sell-price', 'med-expiry']);
    } else {
        alert('تکایە ناو و ژمارە پڕبکەرەوە!');
    }
}

// زیادکردنی کۆمپانیا
function addCompany() {
    const name = document.getElementById('comp-name').value;
    const phone = document.getElementById('comp-phone').value;
    const address = document.getElementById('comp-address').value;
    
    if(name) {
        const comp = {
            id: Date.now(),
            name: name,
            phone: phone,
            address: address
        };
        database.companies.push(comp);
        loadData('companies');
        clearInputs(['comp-name', 'comp-phone', 'comp-address']);
    } else {
        alert('تکایە ناوی کۆمپانیا پڕبکەرەوە!');
    }
}

// زیادکردنی دانەدانی فرۆشیار
function addSellerPayment() {
    const seller = document.getElementById('seller-name').value;
    const amount = document.getElementById('seller-amount').value;
    const date = document.getElementById('seller-date').value;
    
    if(seller && amount) {
        const payment = {
            id: Date.now(),
            seller: seller,
            amount: amount,
            date: date
        };
        database.sellerPayments.push(payment);
        loadData('seller-payment');
        clearInputs(['seller-name', 'seller-amount', 'seller-date']);
    } else {
        alert('تکایە ناوی فرۆشیار و بڕ پڕبکەرەوە!');
    }
}

// زیادکردنی دانەدانی کرێ
function addRentPayment() {
    const amount = document.getElementById('rent-amount').value;
    const month = document.getElementById('rent-month').value;
    const note = document.getElementById('rent-note').value;
    
    if(amount) {
        const rent = {
            id: Date.now(),
            amount: amount,
            month: month,
            note: note
        };
        database.rentPayments.push(rent);
        loadData('rent-payment');
        clearInputs(['rent-amount', 'rent-month', 'rent-note']);
    } else {
        alert('تکایە بڕی کرێ پڕبکەرەوە!');
    }
}

// سڕینەوەی زانیاری
function deleteItem(type, id) {
    if(confirm('دڵنیایت لە سڕینەوە؟')) {
        database[type] = database[type].filter(item => item.id !== id);
        const modalMap = {
            employees: 'employees',
            customers: 'customers',
            debts: 'debt',
            sales: 'sales',
            medicines: 'medicines',
            companies: 'companies',
            sellerPayments: 'seller-payment',
            rentPayments: 'rent-payment'
        };
        loadData(modalMap[type]);
    }
}

// پاککردنەوەی خانەکان
function clearInputs(ids) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.value = '';
    });
}

// بارکردنی داتا و پیشاندانی لە خشتەکاندا
function loadData(modalId) {
    const today = new Date();
    const threeMonths = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000);

    // بەشی کارمەندان
    if (modalId === 'employees') {
        let html = '<table><tr><th>ناو</th><th>پۆست</th><th>مووچە</th><th>ژ. مۆبایل</th><th>کردار</th></tr>';
        database.employees.forEach(emp => {
            html += `<tr>
                <td>${emp.name}</td>
                <td>${emp.position}</td>
                <td>${emp.salary}</td>
                <td>${emp.phone}</td>
                <td class="action-buttons">
                    <button class="btn-danger" onclick="deleteItem('employees', ${emp.id})">سڕینەوە</button>
                </td>
            </tr>`;
        });
        html += '</table>';
        document.getElementById('emp-table').innerHTML = html;
    }
    
    // بەشی کڕیارەکان
    else if (modalId === 'customers') {
        let html = '<table><tr><th>ناو</th><th>ژ. مۆبایل</th><th>ناونیشان</th><th>کردار</th></tr>';
        database.customers.forEach(cust => {
            html += `<tr>
                <td>${cust.name}</td>
                <td>${cust.phone}</td>
                <td>${cust.address}</td>
                <td class="action-buttons">
                    <button class="btn-danger" onclick="deleteItem('customers', ${cust.id})">سڕینەوە</button>
                </td>
            </tr>`;
        });
        html += '</table>';
        document.getElementById('cust-table').innerHTML = html;
    }
    
    // بەشی قەرز
    else if (modalId === 'debt') {
        let html = '<table><tr><th>کڕیار</th><th>بڕ</th><th>بەروار</th><th>کردار</th></tr>';
        database.debts.forEach(debt => {
            html += `<tr>
                <td>${debt.customer}</td>
                <td>${debt.amount}</td>
                <td>${debt.date}</td>
                <td class="action-buttons">
                    <button class="btn-danger" onclick="deleteItem('debts', ${debt.id})">سڕینەوە</button>
                </td>
            </tr>`;
        });
        html += '</table>';
        document.getElementById('debt-table').innerHTML = html;
    }
    
    // بەشی فرۆشتن
    else if (modalId === 'sales') {
        let html = '<table><tr><th>دەرمان</th><th>ژمارە</th><th>نرخ</th><th>بەروار</th><th>کۆی گشتی</th><th>کردار</th></tr>';
        database.sales.forEach(sale => {
            const total = sale.quantity * sale.price;
            html += `<tr>
                <td>${sale.medicine}</td>
                <td>${sale.quantity}</td>
                <td>${sale.price}</td>
                <td>${sale.date}</td>
                <td>${total}</td>
                <td class="action-buttons">
                    <button class="btn-danger" onclick="deleteItem('sales', ${sale.id})">سڕینەوە</button>
                </td>
            </tr>`;
        });
        html += '</table>';
        document.getElementById('sales-table').innerHTML = html;
    }
    
    // بەشی دەرمانەکان
    else if (modalId === 'medicines') {
        let html = '<table><tr><th>ناو</th><th>کۆمپانیا</th><th>ژمارە</th><th>نرخی کڕین</th><th>نرخی فرۆشتن</th><th>بەسەرچوون</th><th>کردار</th></tr>';
        database.medicines.forEach(med => {
            html += `<tr>
                <td>${med.name}</td>
                <td>${med.company}</td>
                <td>${med.quantity}</td>
                <td>${med.buyPrice}</td>
                <td>${med.sellPrice}</td>
                <td>${med.expiry}</td>
                <td class="action-buttons">
                    <button class="btn-danger" onclick="deleteItem('medicines', ${med.id})">سڕینەوە</button>
                </td>
            </tr>`;
        });
        html += '</table>';
        document.getElementById('med-table').innerHTML = html;
    }
    
    // بەشی پشکنینی بەسەرچوون (کەمتر لە ٣ مانگ)
    else if (modalId === 'expiry-check') {
        let html = '<table><tr><th>ناو</th><th>کۆمپانیا</th><th>ژمارە</th><th>بەسەرچوون</th><th>ماوە</th></tr>';
        let found = false;
        database.medicines.forEach(med => {
            if(med.expiry) {
                const expiryDate = new Date(med.expiry);
                if (expiryDate > today && expiryDate <= threeMonths) {
                    found = true;
                    const daysLeft = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
                    html += `<tr style="background: rgba(230, 126, 34, 0.3)">
                        <td>${med.name}</td>
                        <td>${med.company}</td>
                        <td>${med.quantity}</td>
                        <td>${med.expiry}</td>
                        <td>${daysLeft} ڕۆژ</td>
                    </tr>`;
                }
            }
        });
        if(!found) {
            html += '<tr><td colspan="5" style="text-align:center; color:#27ae60;">هیچ دەرمانێک نزیک بەسەرچوون نییە!</td></tr>';
        }
        html += '</table>';
        document.getElementById('expiry-check-table').innerHTML = html;
    }
    
    // بەشی بەسەرچووەکان
    else if (modalId === 'expired') {
        let html = '<table><tr><th>ناو</th><th>کۆمپانیا</th><th>ژمارە</th><th>بەسەرچوون</th></tr>';
        let found = false;
        database.medicines.forEach(med => {
            if(med.expiry) {
                const expiryDate = new Date(med.expiry);
                if (expiryDate <= today) {
                    found = true;
                    html += `<tr style="background: rgba(231, 76, 60, 0.3)">
                        <td>${med.name}</td>
                        <td>${med.company}</td>
                        <td>${med.quantity}</td>
                        <td>${med.expiry}</td>
                    </tr>`;
                }
            }
        });
        if(!found) {
            html += '<tr><td colspan="4" style="text-align:center; color:#27ae60;">هیچ دەرمانێک بەسەرنەچووە!</td></tr>';
        }
        html += '</table>';
        document.getElementById('expired-table').innerHTML = html;
    }
    
    // بەشی کۆمپانیاکان
    else if (modalId === 'companies') {
        let html = '<table><tr><th>ناو</th><th>ژ. پەیوەندی</th><th>ناونیشان</th><th>کردار</th></tr>';
        database.companies.forEach(comp => {
            html += `<tr>
                <td>${comp.name}</td>
                <td>${comp.phone}</td>
                <td>${comp.address}</td>
                <td class="action-buttons">
                    <button class="btn-danger" onclick="deleteItem('companies', ${comp.id})">سڕینەوە</button>
                </td>
            </tr>`;
        });
        html += '</table>';
        document.getElementById('comp-table').innerHTML = html;
    }
    
    // بەشی دانەدانی فرۆشیار
    else if (modalId === 'seller-payment') {
        let html = '<table><tr><th>فرۆشیار</th><th>بڕ</th><th>بەروار</th><th>کردار</th></tr>';
        database.sellerPayments.forEach(pay => {
            html += `<tr>
                <td>${pay.seller}</td>
                <td>${pay.amount}</td>
                <td>${pay.date}</td>
                <td class="action-buttons">
                    <button class="btn-danger" onclick="deleteItem('sellerPayments', ${pay.id})">سڕینەوە</button>
                </td>
            </tr>`;
        });
        html += '</table>';
        document.getElementById('seller-table').innerHTML = html;
    }
    
    // بەشی دانەدانی کرێ
    else if (modalId === 'rent-payment') {
        let html = '<table><tr><th>بڕ</th><th>مانگ</th><th>تێبینی</th><th>کردار</th></tr>';
        database.rentPayments.forEach(rent => {
            html += `<tr>
                <td>${rent.amount}</td>
                <td>${rent.month}</td>
                <td>${rent.note}</td>
                <td class="action-buttons">
                    <button class="btn-danger" onclick="deleteItem('rentPayments', ${rent.id})">سڕینەوە</button>
                </td>
            </tr>`;
        });
        html += '</table>';
        document.getElementById('rent-table').innerHTML = html;
    }
}

// داخستنی Modal کاتێک دەرەوەی کلیک دەکرێت
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}