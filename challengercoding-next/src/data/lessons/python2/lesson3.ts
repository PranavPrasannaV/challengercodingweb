
export const python2Lesson3 = [
    {
        title: "Introduction to Tuples",
        content: `
            <h1 class="tutorial-title">Exercise 1: Introduction to Tuples</h1>
            <p class="tutorial-text">
                Welcome to Python 2, Lesson 3! Today, we'll learn about tuples, another important data structure in Python.
            </p>
            <div class="hint-box">
                <h3>What is a Tuple?</h3>
                <p>A tuple is an ordered, immutable collection of elements. This means once you create a tuple, you can't change its contents.</p>
            </div>
            <p class="tutorial-text">
                Here's how to create a simple tuple:
            </p>
            <div class="code-block">
# Create a tuple of fruits
fruits = ("apple", "banana", "cherry")

print(fruits)
print(type(fruits))
            </div>
            <p class="tutorial-text">
                Now it's your turn! Create a tuple called <code>colors</code> with the following items:
            </p>
            <ul class="tutorial-text">
                <li>red</li>
                <li>green</li>
                <li>blue</li>
            </ul>
            <p class="tutorial-text">
                After creating the tuple, print it and its type to see the result.
            </p>
        `,
        initialCode: "# Create the colors tuple here\n\n# Print the tuple and its type\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Accessing Tuple Elements",
        content: `
            <h1 class="tutorial-title">Exercise 2: Accessing Tuple Elements</h1>
            <p class="tutorial-text">
                Now that we've created a tuple, let's learn how to access its elements.
            </p>
            <div class="hint-box">
                <h3>Accessing Tuple Elements</h3>
                <ul>
                    <li>Use square brackets and the index: <code>tuple_name[index]</code></li>
                    <li>Indexing starts at 0</li>
                    <li>Negative indices count from the end (-1 is the last element)</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example:
            </p>
            <div class="code-block">
fruits = ("apple", "banana", "cherry")

print(fruits[0])  # First element
print(fruits[-1])  # Last element
print(fruits[1:])  # Slice: second element to the end
            </div>
            <p class="tutorial-text">
                Your turn! Using the <code>colors</code> tuple from the previous exercise:
            </p>
            <ol class="tutorial-text">
                <li>Print the second color in the tuple</li>
                <li>Print the last color using a negative index</li>
                <li>Print a slice of the tuple containing the first two colors</li>
            </ol>
        `,
        initialCode: "colors = (\"red\", \"green\", \"blue\")\n\n# Your code here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Tuple Methods and Operations",
        content: `
            <h1 class="tutorial-title">Exercise 3: Tuple Methods and Operations</h1>
            <p class="tutorial-text">
                Tuples have fewer methods than lists because they're immutable, but there are still some useful operations we can perform.
            </p>
            <div class="hint-box">
                <h3>Common Tuple Operations</h3>
                <ul>
                    <li><code>len(tuple)</code>: Returns the number of elements in the tuple</li>
                    <li><code>tuple.count(value)</code>: Counts how many times a value appears in the tuple</li>
                    <li><code>tuple.index(value)</code>: Returns the index of the first occurrence of a value</li>
                    <li><code>+</code> operator: Concatenates tuples</li>
                    <li><code>*</code> operator: Repeats a tuple</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example:
            </p>
            <div class="code-block">
numbers = (1, 2, 3, 2, 4, 2)

print(len(numbers))
print(numbers.count(2))
print(numbers.index(4))

combined = numbers + (5, 6)
repeated = numbers * 2

print(combined)
print(repeated)
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Create a tuple called <code>pets</code> with the values "dog", "cat", "fish", "cat"</li>
                <li>Print the length of the <code>pets</code> tuple</li>
                <li>Count how many times "cat" appears in the tuple</li>
                <li>Find the index of "fish" in the tuple</li>
                <li>Create a new tuple by concatenating <code>pets</code> with ("hamster", "bird")</li>
            </ol>
        `,
        initialCode: "# Create the pets tuple and perform the required operations\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Tuples vs Lists",
        content: `
            <h1 class="tutorial-title">Exercise 4: Tuples vs Lists</h1>
            <p class="tutorial-text">
                Now that we've learned about tuples, let's compare them with lists to understand when to use each.
            </p>
            <div class="hint-box">
                <h3>Tuples vs Lists</h3>
                <ul>
                    <li>Tuples are immutable (can't be changed), lists are mutable</li>
                    <li>Tuples use parentheses (), lists use square brackets []</li>
                    <li>Tuples are faster for accessing elements</li>
                    <li>Lists are better when you need to modify the collection</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example showing some differences:
            </p>
            <div class="code-block">
# Tuple
coordinates = (3, 4)
# coordinates[0] = 5  # This would raise an error

# List
scores = [85, 90, 78]
scores[1] = 92  # This is allowed

print(coordinates)
print(scores)
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Create a tuple <code>person</code> with name and age (e.g., "Alice", 30)</li>
                <li>Create a list <code>hobbies</code> with some hobbies</li>
                <li>Try to add a new hobby to the list</li>
                <li>Try to change the age in the tuple (this will cause an error, but it's okay!)</li>
                <li>Print both the tuple and the list</li>
            </ol>
        `,
        initialCode: "# Create a tuple and a list, then try modifying them\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Weekly Project: Student Records",
        content: `
            <h1 class="tutorial-title">Weekly Project: Student Records</h1>
            <p class="tutorial-text">
                Let's put everything we've learned about tuples into practice by creating a simple student record system.
            </p>
            <p class="tutorial-text">
                Your task is to create a program that:
            </p>
            <ol class="tutorial-text">
                <li>Stores student information (name, age, grade) in tuples</li>
                <li>Keeps a list of these student tuples</li>
                <li>Allows adding new students</li>
                <li>Displays all student records</li>
                <li>Finds a student by name</li>
            </ol>
            <p class="tutorial-text">
                Here's a starting template:
            </p>
            <div class="code-block">
def add_student(students, name, age, grade):
    # Your code here
    pass

def display_students(students):
    # Your code here
    pass

def find_student(students, name):
    # Your code here
    pass

# Main program
students = []

while True:
    print("\\n1. Add student")
    print("2. Display all students")
    print("3. Find student")
    print("4. Exit")
    
    choice = input("Enter your choice (1-4): ")
    
    # Implement the menu options here
    
    if choice == '4':
        break

print("Thank you for using the Student Records system!")
            </div>
            <p class="tutorial-text">
                Implement the functions and the main program loop. Use tuples to store each student's information and a list to keep track of all students.
            </p>
            <p class="tutorial-text">
                This project will give you hands-on experience with tuples and reinforce the concepts we've covered this week. Good luck!
            </p>
        `,
        initialCode: "# Implement your Student Records system here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
