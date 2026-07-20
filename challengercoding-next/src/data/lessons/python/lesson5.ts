export const pythonLesson5 = [
    {
        title: "Introduction to Lists",
        content: `
            <p class="tutorial-text">
                In Python, a list is a versatile and powerful data structure that allows you to store multiple items in a single variable. Think of a list as a container that can hold various types of data, much like a shopping list can contain different items.
            </p>
            <p class="tutorial-text">
                Lists are:
                <ul>
                    <li>Ordered: Items have a defined order, and that order will not change.</li>
                    <li>Mutable: You can change, add, and remove items in a list after it is created.</li>
                    <li>Allow duplicates: Since lists are indexed, they can have items with the same value.</li>
                </ul>
            </p>
            <h3>Example of a List:</h3>
            <div class="code-block">my_list = [1, "apple", 3.14, True]</div>
            <p class="tutorial-text">
                In this example, we've created a list called 'my_list' that contains four different types of data:
                <ul>
                    <li>An integer (1)</li>
                    <li>A string ("apple")</li>
                    <li>A float (3.14)</li>
                    <li>A boolean (True)</li>
                </ul>
                This demonstrates how flexible lists can be in Python.
            </p>
            <h3>Real-world Analogy</h3>
            <p class="tutorial-text">
                Imagine a backpack. You can put different items in it: books, pens, a water bottle, and snacks. Each item can be different, just like in a Python list. You can add or remove items from your backpack as needed, similar to how you can modify a list.
            </p>
            <h3>Try it Yourself</h3>
            <p class="tutorial-text">Now, let's create three different lists and print them. Follow these steps:</p>
            <ol>
                <li>Create a list of fruits</li>
                <li>Create a list of numbers</li>
                <li>Create a mixed list with different types of data</li>
                <li>Print each list</li>
            </ol>
            <div class="hint">
                <strong>Hint:</strong> To create a list, use square brackets [ ] and separate items with commas. To print a list, you can simply use the print() function with the list name as an argument.
            </div>
        `,
        initialCode: `# Step 1: Create a list of fruits
fruits = ["apple", "banana", "orange"]

# Step 2: Create a list of numbers
numbers = [1, 2, 3, 4, 5]

# Step 3: Create a mixed list
mixed = [True, "Python", 3.14, [1, 2, 3]]

# Step 4: Print the lists
print("Fruits:", fruits)
print("Numbers:", numbers)
print("Mixed:", mixed)
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Declaring Lists",
        content: `
            <p class="tutorial-text">
                Declaring a list in Python is straightforward. You use square brackets [ ] to enclose the list items, separating each item with a comma.
            </p>
            <h3>Syntax for Declaring a List:</h3>
            <div class="code-block">list_name = [item1, item2, item3, ...]</div>
            <p class="tutorial-text">
                Here's an example of declaring a list of groceries:
            </p>
            <div class="code-block">groceries = ["Milk", "Bread", "Eggs", "Cheese"]</div>
            <p class="tutorial-text">
                In this example:
                <ul>
                    <li>'groceries' is the name of our list</li>
                    <li>The items "Milk", "Bread", "Eggs", and "Cheese" are the elements of the list</li>
                    <li>Each element is a string, enclosed in quotes</li>
                    <li>The elements are separated by commas</li>
                </ul>
            </p>
            <h3>Lists Can Contain Different Data Types</h3>
            <p class="tutorial-text">
                Remember, lists in Python can contain items of different data types. For example:
            </p>
            <div class="code-block">mixed_list = ["Hello", 42, 3.14, True]</div>
            <p class="tutorial-text">
                This list contains a string, an integer, a float, and a boolean.
            </p>
            <h3>Try it Yourself</h3>
            <p class="tutorial-text">Now, let's create a list of your favorite books and perform some operations on it. Follow these steps:</p>
            <ol>
                <li>Create a list called 'favorite_books' with at least four book titles</li>
                <li>Print the list of favorite books</li>
                <li>Print the number of books in the list using the len() function</li>
                <li>Add a new book to the list using the append() method</li>
                <li>Print the updated list and the new number of books</li>
            </ol>
            <div class="hint">
                <strong>Hint:</strong> To add an item to a list, you can use the append() method. The syntax is: list_name.append(new_item)
            </div>
        `,
        initialCode: `# Step 1: Create a list of your favorite books
favorite_books = ["To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Great Gatsby"]

# Step 2: Print the list
print("My favorite books:", favorite_books)

# Step 3: Print the number of books
print("Number of favorite books:", len(favorite_books))

# Step 4: Add a new book to the list
favorite_books.append("The Catcher in the Rye")

# Step 5: Print the updated list and new number of books
print("Updated list of favorite books:", favorite_books)
print("New number of favorite books:", len(favorite_books))
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Understanding Indexes",
        content: `
            <p class="tutorial-text">
                In Python lists, each item has a specific position, called an index. Understanding indexes is crucial for accessing and manipulating list items.
            </p>
            <h3>Key Points About Indexes:</h3>
            <ul>
                <li>Indexing starts at 0, not 1</li>
                <li>The last item in the list has an index of -1</li>
                <li>You can access items using their index: list_name[index]</li>
            </ul>
            <h3>Example of Indexing:</h3>
            <div class="code-block">
fruits = ["apple", "banana", "orange", "grape"]
# Indexes:    0        1         2        3
            </div>
            <p class="tutorial-text">
                In this example:
                <ul>
                    <li>"apple" is at index 0</li>
                    <li>"banana" is at index 1</li>
                    <li>"orange" is at index 2</li>
                    <li>"grape" is at index 3</li>
                </ul>
            </p>
            <p class="tutorial-text">
                You can also use negative indexing:
                <ul>
                    <li>"grape" is at index -1 (last item)</li>
                    <li>"orange" is at index -2 (second to last item)</li>
                    <li>And so on...</li>
                </ul>
            </p>
            <h3>Try it Yourself</h3>
            <p class="tutorial-text">Let's practice working with list indexes. Follow these steps:</p>
            <ol>
                <li>Create a list of colors</li>
                <li>Print each element with its positive index</li>
                <li>Print the first and last elements using positive and negative indexing</li>
                <li>Try to access an index that doesn't exist and see what happens</li>
            </ol>
            <div class="hint">
                <strong>Hint:</strong> To print each element with its index, you can use a for loop with the enumerate() function. For example:
                <pre>for index, item in enumerate(list_name):
    print(f"Index {index}: {item}")</pre>
            </div>
        `,
        initialCode: `# Step 1: Create a list of colors
colors = ["red", "blue", "green", "yellow", "purple"]

# Step 2: Print each element with its index
for index, color in enumerate(colors):
    print(f"Index {index}: {color}")

# Step 3: Print the first and last elements
print("\\nFirst color (positive index):", colors[0])
print("Last color (positive index):", colors[4])
print("First color (negative index):", colors[-5])
print("Last color (negative index):", colors[-1])

# Step 4: Try to access an index that doesn't exist
try:
    print("\\nTrying to access index 5:", colors[5])
except IndexError as e:
    print("\\nError occurred:", str(e))
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "List Functions",
        content: `
            <p class="tutorial-text">
                Python provides a variety of built-in functions and methods to manipulate lists. Understanding these functions is essential for working effectively with lists.
            </p>
            <h3>Common List Functions and Methods:</h3>
            <ul>
                <li><code>len(list)</code>: Returns the number of items in the list</li>
                <li><code>list.append(item)</code>: Adds an item to the end of the list</li>
                <li><code>list.insert(index, item)</code>: Inserts an item at a specified position</li>
                <li><code>list.remove(item)</code>: Removes the first occurrence of the specified item</li>
                <li><code>list.pop(index)</code>: Removes and returns the item at the specified position</li>
                <li><code>list.index(item)</code>: Returns the index of the first occurrence of the specified item</li>
                <li><code>list.count(item)</code>: Returns the number of times the specified item appears in the list</li>
                <li><code>list.sort()</code>: Sorts the list in ascending order</li>
                <li><code>list.reverse()</code>: Reverses the order of the list</li>
            </ul>
            <h3>Try it Yourself</h3>
            <p class="tutorial-text">Let's practice using these list functions. Follow these steps:</p>
            <ol>
                <li>Create a list of numbers</li>
                <li>Print the original list</li>
                <li>Add a new number to the end of the list</li>
                <li>Insert a number at the beginning of the list</li>
                <li>Remove a specific number from the list</li>
                <li>Sort the list in ascending order</li>
                <li>Reverse the list</li>
                <li>Print the final list</li>
            </ol>
            <div class="hint">
                <strong>Hint:</strong> Remember to print the list after each operation to see how it changes. You can use the print() function with a descriptive message for each step.
            </div>
        `,
        initialCode: `# Step 1: Create a list of numbers
numbers = [5, 2, 8, 1, 9, 3, 7]

# Step 2: Print the original list
print("Original list:", numbers)

# Step 3: Add a new number to the end of the list
numbers.append(6)
print("After appending 6:", numbers)

# Step 4: Insert a number at the beginning of the list
numbers.insert(0, 0)
print("After inserting 0 at the beginning:", numbers)

# Step 5: Remove a specific number from the list
numbers.remove(9)
print("After removing 9:", numbers)

# Step 6: Sort the list in ascending order
numbers.sort()
print("After sorting:", numbers)

# Step 7: Reverse the list
numbers.reverse()
print("After reversing:", numbers)

# Step 8: Print the final list
print("Final list:", numbers)

# Bonus: Let's use some other list functions
print("\\nBonus operations:")
print("Number of items in the list:", len(numbers))
print("Index of 7 in the list:", numbers.index(7))
print("Count of 3 in the list:", numbers.count(3))
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: 'The "in" Operator',
        content: `
            <p class="tutorial-text">
                The "in" operator in Python is a powerful tool for checking if an item exists in a list. It returns True if the item is found in the list, and False otherwise.
            </p>
            <h3>Syntax:</h3>
            <div class="code-block">item in list_name</div>
            <p class="tutorial-text">
                This expression evaluates to True if 'item' is found in 'list_name', and False otherwise.
            </p>
            <h3>Example:</h3>
            <div class="code-block">
fruits = ["apple", "banana", "orange"]
if "banana" in fruits:
    print("Yes, banana is in the fruits list")
else:
    print("No, banana is not in the fruits list")
            </div>
            <p class="tutorial-text">
                The "in" operator is often used in conditional statements and loops to check for the presence of an item before performing an operation.
            </p>
            <h3>Try it Yourself</h3>
            <p class="tutorial-text">Let's practice using the "in" operator with lists. Follow these steps:</p>
            <ol>
                <li>Create a list of fruits</li>
                <li>Create a list of fruits to check</li>
                <li>Use a loop to check if each fruit in the check list is in the fruits list</li>
                <li>Add a new fruit to the list</li>
                <li>Check if the new fruit is now in the list</li>
            </ol>
            <div class="hint">
                <strong>Hint:</strong> You can use a for loop to iterate through the list of fruits to check. Inside the loop, use an if statement with the "in" operator to check if each fruit is in the main fruits list.
            </div>
        `,
        initialCode: `# Step 1: Create a list of fruits
fruits = ["apple", "banana", "orange", "grape", "kiwi"]

# Step 2: Create a list of fruits to check
fruits_to_check = ["apple", "mango", "kiwi", "pear"]

# Step 3: Check if each fruit in the check list is in the fruits list
print("Checking for fruits:")
for fruit in fruits_to_check:
    if fruit in fruits:
        print(f"{fruit} is in the fruits list")
    else:
        print(f"{fruit} is not in the fruits list")

# Step 4: Add a new fruit to the list
new_fruit = "mango"
fruits.append(new_fruit)
print(f"\\nAdded {new_fruit} to the list")

# Step 5: Check if the new fruit is now in the list
if new_fruit in fruits:
    print(f"{new_fruit} is now in the fruits list")
else:
    print(f"{new_fruit} is still not in the fruits list")

# Bonus: Print the updated list
print("\\nUpdated fruits list:", fruits)
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "To-Do List Project",
        content: `
            <p class="tutorial-text">
                Now that we've learned about lists and their operations, let's put our knowledge into practice by creating a simple To-Do List Manager. This project will help reinforce the concepts we've covered and show how they can be applied in a real-world scenario.
            </p>
            <h3>Project Requirements:</h3>
            <p class="tutorial-text">
                Create a To-Do List Manager that can:
                <ol>
                    <li>Add tasks to the list</li>
                    <li>Remove tasks from the list</li>
                    <li>Display all tasks</li>
                    <li>Mark tasks as completed</li>
                </ol>
            </p>
            <h3>Implementation Steps:</h3>
            <ol>
                <li>Create two lists: one for active tasks and one for completed tasks</li>
                <li>Implement a function to add tasks to the active list</li>
                <li>Implement a function to remove tasks from the active list</li>
                <li>Implement a function to display all tasks (both active and completed)</li>
                <li>Implement a function to mark tasks as completed (move from active to completed list)</li>
                <li>Test your functions by adding, removing, completing, and displaying tasks</li>
            </ol>
            <div class="hint">
                <strong>Hint:</strong> Use the list methods we've learned (append, remove) to manipulate the task lists. When displaying tasks, you can use enumeration to show task numbers.
            </div>
            <p class="tutorial-text">
                The template below provides a starting point for your To-Do List Manager. Fill in the functions and add any additional functionality you think would be useful!
            </p>
        `,
        initialCode: `# To-Do List Manager

tasks = []
completed_tasks = []

def add_task(task):
    tasks.append(task)
    print(f"Task '{task}' added to the list.")

def remove_task(task):
    if task in tasks:
        tasks.remove(task)
        print(f"Task '{task}' removed from the list.")
    else:
        print(f"Task '{task}' not found in the list.")

def display_tasks():
    if tasks:
        print("Current tasks:")
        for index, task in enumerate(tasks, 1):
            print(f"{index}. {task}")
    else:
        print("No tasks in the list.")

    if completed_tasks:
        print("\\nCompleted tasks:")
        for index, task in enumerate(completed_tasks, 1):
            print(f"{index}. {task}")

def mark_completed(task):
    if task in tasks:
        tasks.remove(task)
        completed_tasks.append(task)
        print(f"Task '{task}' marked as completed.")
    else:
        print(f"Task '{task}' not found in the list.")

# Test your functions
add_task("Buy groceries")
add_task("Finish homework")
add_task("Call mom")

print("\\nInitial task list:")
display_tasks()

remove_task("Finish homework")
mark_completed("Buy groceries")

print("\\nUpdated task list:")
display_tasks()

# Add more tasks and interact with the list
add_task("Go for a run")
add_task("Read a book")
mark_completed("Call mom")

print("\\nFinal task list:")
display_tasks()
`,
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
