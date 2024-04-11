window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');
    const deleteButtonElement = document.querySelector('.delete');

    addButtonElement.addEventListener('click', addExpense);
    previewList.addEventListener('click', handlePreviewListClick);
    expensesList.addEventListener('click', handleExpensesListClick);
    deleteButtonElement.addEventListener('click', reloadApplication);

    function addExpense() {
        const expenseTypeInput = document.getElementById('expense');
        const expenseAmountInput = document.getElementById('amount');
        const expenseDateInput = document.getElementById('date');

        const expenseType = expenseTypeInput.value.trim();
        const expenseAmount = expenseAmountInput.value.trim();
        const expenseDate = expenseDateInput.value.trim();

        if (expenseType !== '' && expenseAmount !== '' && expenseDate !== '') {
            const newItem = createExpenseItem(expenseType, expenseAmount, expenseDate);
            previewList.appendChild(newItem);

            expenseTypeInput.value = '';
            expenseAmountInput.value = '';
            expenseDateInput.value = '';
            addButtonElement.disabled = true;
        }
    }

    function createExpenseItem(type, amount, date) {
        const liElement = document.createElement('li');
        liElement.className = 'expense-item';

        const article = document.createElement('article');
        article.innerHTML = `<p>Type: ${type}</p><p>Amount: ${amount}$</p><p>Date: ${date}</p>`;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';
        const editButton = document.createElement('button');
        editButton.className = 'btn edit';
        editButton.textContent = 'edit';
        const okButton = document.createElement('button');
        okButton.className = 'btn ok';
        okButton.textContent = 'ok';

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(okButton);

        liElement.appendChild(article);
        liElement.appendChild(buttonsDiv);

        return liElement;
    }

    function handlePreviewListClick(event) {
        const target = event.target;

        if (target.classList.contains('edit')) {
            const li = target.closest('.expense-item');
            const typeParagraph = li.querySelector('p:nth-child(1)');
            const amountParagraph = li.querySelector('p:nth-child(2)');
            const dateParagraph = li.querySelector('p:nth-child(3)');

            document.getElementById('expense').value = typeParagraph.textContent.split(': ')[1];
            document.getElementById('amount').value = amountParagraph.textContent.split(': ')[1].slice(0, -1);
            document.getElementById('date').value = dateParagraph.textContent.split(': ')[1];

            li.remove();
            addButtonElement.disabled = false;
        }
    }

    function handleExpensesListClick(event) {
        const target = event.target;

        if (target.classList.contains('ok')) {
            const li = target.closest('.expense-item');

            li.querySelector('.buttons').remove();
            expensesList.appendChild(li);
            addButtonElement.disabled = false;
        }
    }

    function reloadApplication() {
        location.reload();
    }
}