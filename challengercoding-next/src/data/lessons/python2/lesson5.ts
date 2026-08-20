
export const python2Lesson5 = [
    {
        title: "Introduction to Objects and Classes",
        content: `
            <h2 class="tutorial-title">Exercise 1: Introduction to Objects and Classes</h2>
            <p class="tutorial-text">
                Welcome to Python 2, Lesson 5! Today, we'll learn about objects and classes, fundamental concepts in object-oriented programming (OOP).
            </p>
            <div class="hint-box">
                <h3>What are Objects and Classes?</h3>
                <p>A class is like a blueprint for creating objects. An object is an instance of a class, which contains its own data and behaviors.</p>
            </div>
            <p class="tutorial-text">
                Let's start with a simple example of a class:
            </p>
            <div class="code-block">
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

# Create a Dog object
my_dog = Dog("Buddy", 3)
print(f"{my_dog.name} is {my_dog.age} years old.")
print(my_dog.bark())
            </div>
            <p class="tutorial-text">
                Now it's your turn! Create a class called <code>Cat</code> with the following:
            </p>
            <ol class="tutorial-text">
                <li>An <code>__init__</code> method that takes <code>name</code> and <code>color</code> as parameters</li>
                <li>A method called <code>meow</code> that returns a string like "name says Meow!"</li>
                <li>Create a Cat object and call its meow method</li>
            </ol>
        `,
        initialCode: "# Define your Cat class here\n\n# Create a Cat object and call its meow method\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Creating Methods",
        content: `
            <h2 class="tutorial-title">Exercise 2: Creating Methods</h2>
            <p class="tutorial-text">
                Methods are functions that belong to a class. They can perform actions using the object's data.
            </p>
            <div class="hint-box">
                <h3>Instance Methods</h3>
                <ul>
                    <li>Instance methods are functions defined inside a class</li>
                    <li>They always take 'self' as the first parameter</li>
                    <li>They can access and modify the object's attributes</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example with multiple methods:
            </p>
            <div class="code-block">
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

# Using the Rectangle class
rect = Rectangle(5, 3)
print(f"Area: {rect.area()}")
print(f"Perimeter: {rect.perimeter()}")
            </div>
            <p class="tutorial-text">
                Your turn! Enhance the <code>Cat</code> class from the previous exercise:
            </p>
            <ol class="tutorial-text">
                <li>Add an <code>age</code> attribute to the <code>__init__</code> method</li>
                <li>Create a method called <code>birthday</code> that increases the cat's age by 1 and returns a celebratory message</li>
                <li>Create a method called <code>introduce</code> that returns a string introducing the cat with its name, color, and age</li>
                <li>Create a Cat object, call its birthday method, and then call its introduce method</li>
            </ol>
        `,
        initialCode: "# Enhance your Cat class here\n\n# Create a Cat object, celebrate its birthday, and introduce it\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Class and Instance Variables",
        content: `
            <h2 class="tutorial-title">Exercise 3: Class and Instance Variables</h2>
            <p class="tutorial-text">
                In Python, we can have two types of variables in a class: class variables and instance variables.
            </p>
            <div class="hint-box">
                <h3>Class vs Instance Variables</h3>
                <ul>
                    <li>Class variables are shared by all instances of the class</li>
                    <li>Instance variables are unique to each instance</li>
                    <li>Class variables are defined outside any method, usually at the top of the class</li>
                    <li>Instance variables are typically defined in the __init__ method</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example illustrating both types of variables:
            </p>
            <div class="code-block">
class Dog:
    # Class variable
    species = "Canis familiaris"

    def __init__(self, name, age):
        # Instance variables
        self.name = name
        self.age = age

    def describe(self):
        return f"{self.name} is {self.age} years old and belongs to the {self.species} species."

dog1 = Dog("Buddy", 5)
dog2 = Dog("Max", 3)

print(dog1.describe())
print(dog2.describe())

# Changing the class variable
Dog.species = "Canis lupus familiaris"

print(dog1.describe())
print(dog2.describe())
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Create a class called <code>Student</code> with a class variable <code>school_name</code> set to "Python High School"</li>
                <li>Add instance variables for <code>name</code> and <code>grade</code></li>
                <li>Create a method <code>introduce</code> that returns a string introducing the student and mentioning their school</li>
                <li>Create two Student instances and call their introduce methods</li>
                <li>Change the school_name class variable and call the introduce methods again to see the change</li>
            </ol>
        `,
        initialCode: "# Create the Student class and demonstrate class and instance variables\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Inheritance",
        content: `
            <h2 class="tutorial-title">Exercise 4: Inheritance</h2>
            <p class="tutorial-text">
                Inheritance allows us to define a class that inherits all the methods and properties from another class.
            </p>
            <div class="hint-box">
                <h3>Inheritance Basics</h3>
                <ul>
                    <li>The class being inherited from is called the parent or base class</li>
                    <li>The class that inherits is called the child or derived class</li>
                    <li>Child classes can override or extend the functionality of parent classes</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example demonstrating inheritance:
            </p>
            <div class="code-block">
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())
print(cat.speak())
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Create a base class called <code>Vehicle</code> with attributes <code>make</code> and <code>model</code></li>
                <li>Add a method <code>info</code> to the Vehicle class that returns a string with the vehicle's make and model</li>
                <li>Create two derived classes: <code>Car</code> and <code>Motorcycle</code></li>
                <li>Add a <code>num_wheels</code> attribute to each derived class (4 for Car, 2 for Motorcycle)</li>
                <li>Override the <code>info</code> method in both derived classes to include the number of wheels</li>
                <li>Create instances of Car and Motorcycle and call their info methods</li>
            </ol>
        `,
        initialCode: "# Create the Vehicle, Car, and Motorcycle classes here\n\n# Demonstrate inheritance\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Weekly Project: Pet Shop Simulator",
        content: `
            <h2 class="tutorial-title">Weekly Project: Pet Shop Simulator</h2>
            <p class="tutorial-text">
                Let's put everything we've learned about objects and classes into practice by creating a simple pet shop simulator.
            </p>
            <p class="tutorial-text">
                Your task is to create a program that:
            </p>
            <ol class="tutorial-text">
                <li>Defines a base <code>Animal</code> class with common attributes and methods</li>
                <li>Creates derived classes for different types of pets (e.g., Dog, Cat, Fish)</li>
                <li>Implements a <code>PetShop</code> class that can add pets, remove pets, and list all pets</li>
                <li>Allows users to interact with the pet shop (add pets, list pets, etc.)</li>
            </ol>
            <p class="tutorial-text">
                Here's a starting template:
            </p>
            <div class="code-block">
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return f"{self.name} barks!"

class Cat(Animal):
    def make_sound(self):
        return f"{self.name} meows!"

class PetShop:
    def __init__(self):
        self.pets = []

    def add_pet(self, pet):
        self.pets.append(pet)
        print(f"{pet.name} has been added to the pet shop.")

    def list_pets(self):
        if not self.pets:
            print("The pet shop is empty.")
        else:
            for pet in self.pets:
                print(f"{pet.name} - {pet.species}")

# Test your Pet Shop Simulator
shop = PetShop()
dog = Dog("Buddy", "Dog")
cat = Cat("Whiskers", "Cat")

shop.add_pet(dog)
shop.add_pet(cat)
shop.list_pets()

print(dog.make_sound())
print(cat.make_sound())
            </div>
            <p class="tutorial-text">
                Enhance the Pet Shop Simulator by adding the following features:
            </p>
            <ol class="tutorial-text">
                <li>Add a <code>Fish</code> class that inherits from <code>Animal</code></li>
                <li>Implement a method to remove pets from the shop</li>
                <li>Add a method to feed all the pets in the shop</li>
                <li>Create a simple menu system for users to interact with the pet shop</li>
                <li>Add error handling for invalid inputs or actions</li>
            </ol>
            <p class="tutorial-text">
                This project will give you hands-on experience with classes, objects, inheritance, and basic user interaction. Have fun creating your Pet Shop Simulator!
            </p>
        `,
        initialCode: "# Implement your enhanced Pet Shop Simulator here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
