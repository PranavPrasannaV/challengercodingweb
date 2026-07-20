
export const python2Lesson2 = [
    {
        title: "Introduction to Dictionaries",
        content: `
            <h1 class="tutorial-title">Exercise 1: Introduction to Dictionaries</h1>
            <p class="tutorial-text">
                Welcome to Python 2, Lesson 2! Today, we'll learn about dictionaries, a powerful and flexible data structure in Python.
            </p>
            <div class="hint-box">
                <h3>What is a Dictionary?</h3>
                <p>A dictionary is an unordered collection of key-value pairs. It's also known as an associative array, hash table, or hash map in other programming languages.</p>
            </div>
            <p class="tutorial-text">
                Here's how to create a simple dictionary:
            </p>
            <div class="code-block">
# Create a dictionary of fruit colors
fruit_colors = {
    "apple": "red",
    "banana": "yellow",
    "grape": "purple"
}

print(fruit_colors)
            </div>
            <p class="tutorial-text">
                Now it's your turn! Create a dictionary called <code>student_scores</code> with the following information:
            </p>
            <ul class="tutorial-text">
                <li>Alice: 85</li>
                <li>Bob: 92</li>
                <li>Charlie: 78</li>
            </ul>
            <p class="tutorial-text">
                After creating the dictionary, print it to see the result.
            </p>
        `,
        initialCode: "# Create the student_scores dictionary here\n\n# Print the dictionary\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Accessing and Modifying Dictionaries",
        content: `
            <h1 class="tutorial-title">Exercise 2: Accessing and Modifying Dictionaries</h1>
            <p class="tutorial-text">
                Now that we've created a dictionary, let's learn how to access and modify its contents.
            </p>
            <div class="hint-box">
                <h3>Accessing and Modifying Dictionaries</h3>
                <ul>
                    <li>Access a value: <code>dict_name[key]</code></li>
                    <li>Modify a value: <code>dict_name[key] = new_value</code></li>
                    <li>Add a new key-value pair: <code>dict_name[new_key] = value</code></li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example:
            </p>
            <div class="code-block">
fruit_colors = {"apple": "red", "banana": "yellow", "grape": "purple"}

# Access a value
print(fruit_colors["banana"])

# Modify a value
fruit_colors["apple"] = "green"

# Add a new key-value pair
fruit_colors["orange"] = "orange"

print(fruit_colors)
            </div>
            <p class="tutorial-text">
                Your turn! Using the <code>student_scores</code> dictionary from the previous exercise:
            </p>
            <ol class="tutorial-text">
                <li>Print Charlie's score</li>
                <li>Update Bob's score to 95</li>
                <li>Add a new student, David, with a score of 88</li>
                <li>Print the updated dictionary</li>
            </ol>
        `,
        initialCode: "student_scores = {\n    \"Alice\": 85,\n    \"Bob\": 92,\n    \"Charlie\": 78\n}\n\n# Your code here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Dictionary Methods",
        content: `
            <h1 class="tutorial-title">Exercise 3: Dictionary Methods</h1>
            <p class="tutorial-text">
                Dictionaries come with several useful methods that make working with them easier.
            </p>
            <div class="hint-box">
                <h3>Common Dictionary Methods</h3>
                <ul>
                    <li><code>dict.keys()</code>: Returns a list of all keys</li>
                    <li><code>dict.values()</code>: Returns a list of all values</li>
                    <li><code>dict.items()</code>: Returns a list of all key-value pairs as tuples</li>
                    <li><code>dict.get(key, default)</code>: Returns the value for a key, or a default if the key doesn't exist</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example:
            </p>
            <div class="code-block">
fruit_colors = {"apple": "red", "banana": "yellow", "grape": "purple"}

print("Keys:", fruit_colors.keys())
print("Values:", fruit_colors.values())
print("Items:", fruit_colors.items())
print("Color of cherry:", fruit_colors.get("cherry", "unknown"))
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Print all the student names (keys) in the <code>student_scores</code> dictionary</li>
                <li>Print all the scores (values) in the dictionary</li>
                <li>Print all the student-score pairs (items)</li>
                <li>Try to get the score for a student named "Eve". If Eve doesn't exist, return "Not found" as the default value</li>
            </ol>
        `,
        initialCode: "student_scores = {\n    \"Alice\": 85,\n    \"Bob\": 95,\n    \"Charlie\": 78,\n    \"David\": 88\n}\n\n# Your code here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Looping Through Dictionaries",
        content: `
            <h1 class="tutorial-title">Exercise 4: Looping Through Dictionaries</h1>
            <p class="tutorial-text">
                Often, you'll need to iterate through all the key-value pairs in a dictionary. Python provides several ways to do this.
            </p>
            <div class="hint-box">
                <h3>Looping Through Dictionaries</h3>
                <ul>
                    <li>Loop through keys: <code>for key in dict:</code></li>
                    <li>Loop through values: <code>for value in dict.values():</code></li>
                    <li>Loop through key-value pairs: <code>for key, value in dict.items():</code></li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example:
            </p>
            <div class="code-block">
fruit_colors = {"apple": "red", "banana": "yellow", "grape": "purple"}

# Loop through keys
for fruit in fruit_colors:
    print(f"Fruit: {fruit}")

# Loop through values
for color in fruit_colors.values():
    print(f"Color: {color}")

# Loop through key-value pairs
for fruit, color in fruit_colors.items():
    print(f"The {fruit} is {color}")
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Loop through the <code>student_scores</code> dictionary and print each student's name</li>
                <li>Calculate and print the average score of all students</li>
                <li>Find and print the name of the student with the highest score</li>
            </ol>
        `,
        initialCode: "student_scores = {\n    \"Alice\": 85,\n    \"Bob\": 95,\n    \"Charlie\": 78,\n    \"David\": 88\n}\n\n# Your code here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Weekly Project: Contact Book",
        content: `
            <h1 class="tutorial-title">Weekly Project: Contact Book</h1>
            <p class="tutorial-text">
                Let's put everything we've learned about dictionaries into practice by creating a simple contact book application.
            </p>
            <p class="tutorial-text">
                Your task is to create a program that allows users to:
            </p>
            <ol class="tutorial-text">
                <li>Add a new contact (name and phone number)</li>
                <li>View all contacts</li>
                <li>Search for a contact by name</li>
                <li>Update a contact's phone number</li>
                <li>Delete a contact</li>
            </ol>
            <p class="tutorial-text">
                Here's a starting template:
            </p>
            <div class="code-block">
def add_contact(contacts, name, phone):
    # Your code here
    pass

def view_contacts(contacts):
    # Your code here
    pass

def search_contact(contacts, name):
    # Your code here
    pass

def update_contact(contacts, name, new_phone):
    # Your code here
    pass

def delete_contact(contacts, name):
    # Your code here
    pass

# Main program
contacts = {}

while True:
    print("\\n1. Add contact")
    print("2. View all contacts")
    print("3. Search contact")
    print("4. Update contact")
    print("5. Delete contact")
    print("6. Exit")
    
    choice = input("Enter your choice (1-6): ")
    
    # Implement the menu options here
    
    if choice == '6':
        break

print("Thank you for using the Contact Book!")
            </div>
            <p class="tutorial-text">
                Implement the functions and the main program loop. Use the dictionary methods and loops we've learned to manage the contacts.
            </p>
            <p class="tutorial-text">
                This project will give you hands-on experience with dictionaries and reinforce the concepts we've covered this week. Good luck!
            </p>
        `,
        initialCode: "# Implement your Contact Book application here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
