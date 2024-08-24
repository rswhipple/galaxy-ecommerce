// Define a WeatherStation class
class ShoppingCart {
    constructor() {
        // Initialize an empty array to hold observers
        this.observers = [];
        // Initialize the cart to empty aka 0 items
        this.cart = 0;
    }
    
    // Method to add an observer to the list
    addObserver(observer) {
        this.observers.push(observer);
    }
    
    // Method to remove an observer from the list
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    // Method to set the cart and notify observers
    addToCart(cart) {
        this.cart = cart;
        this.notifyObservers();
    }
    
    // Method to notify all observers about the cart change
    notifyObservers() {
        this.observers.forEach(observer => {
        // Call the update method on each observer
        observer.update(this.cart);
        });
    }
    }
    
    // Define a DisplayDevice class
    class DisplayDevice {
    constructor(name) {
        // Store the name of the display device
        this.name = name;
    }
    
    // Method called when the display is updated with cart
    update(cart) {
        // Log a message indicating the name of the display and the cart
        console.log(`${this.name} Display: Cart is ${cart}°C`);
    }
    }
    
    // Create an instance of the WeatherStation class
    const shoppingCart = new ShoppingCart();
    
    // Create two instances of the DisplayDevice class with different names
    const displayDevice1 = new DisplayDevice("Display 1");
    const displayDevice2 = new DisplayDevice("Display 2");
    
    // Add both display devices as observers to the weather station
    shoppingCart.addObserver(displayDevice1);
    shoppingCart.addObserver(displayDevice2);
    
    // Simulate a change in cart by setting it to 25°C
    shoppingCart.setCart(25);
    
    // Simulate another change in cart by setting it to 30°C
    shoppingCart.setCart(30);
    