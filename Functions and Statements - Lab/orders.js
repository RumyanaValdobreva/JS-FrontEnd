function solve(product, quantity) {
    console.log((productPrice(product) * quantity).toFixed(2));

    function productPrice(product) {
        switch (product) {
            case 'coffee':
                return 1.50;
            case 'water':
                return 1.00;
            case 'coke':
                return 1.40;
            case 'snacks':
                return 2.00;
        }
    
    }
}

solve("coffee", 2);