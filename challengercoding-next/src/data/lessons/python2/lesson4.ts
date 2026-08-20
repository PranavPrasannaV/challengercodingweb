
export const python2Lesson4 = [
    {
        title: "Introduction to Sets",
        content: `
            <h2 class="tutorial-title">Exercise 1: Introduction to Sets</h2>
            <p class="tutorial-text">
                Welcome to Python 2, Lesson 4! Today, we'll learn about sets, another useful data structure in Python.
            </p>
            <div class="hint-box">
                <h3>What is a Set?</h3>
                <p>A set is an unordered collection of unique elements. This means that each item in a set appears only once, and the order doesn't matter.</p>
            </div>
            <p class="tutorial-text">
                Here's how to create a simple set:
            </p>
            <div class="code-block">
# Create a set of fruits
fruits = {"apple", "banana", "cherry"}

print(fruits)
print(type(fruits))
            </div>
            <p class="tutorial-text">
                Now it's your turn! Create a set called <code>colors</code> with the following items:
            </p>
            <ul class="tutorial-text">
                <li>red</li>
                <li>green</li>
                <li>blue</li>
                <li>red (yes, add it twice!)</li>
            </ul>
            <p class="tutorial-text">
                After creating the set, print it and its type to see the result. Notice how duplicates are automatically removed!
            </p>
        `,
        initialCode: "# Create the colors set here\n\n# Print the set and its type\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Adding and Removing Elements",
        content: `
            <h2 class="tutorial-title">Exercise 2: Adding and Removing Elements</h2>
            <p class="tutorial-text">
                Now that we've created a set, let's learn how to add and remove elements.
            </p>
            <div class="hint-box">
                <h3>Set Methods</h3>
                <ul>
                    <li><code>add(item)</code>: Adds an item to the set</li>
                    <li><code>remove(item)</code>: Removes an item from the set (raises an error if the item is not found)</li>
                    <li><code>discard(item)</code>: Removes an item if it's present (does not raise an error if the item is not found)</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example:
            </p>
            <div class="code-block">
fruits = {"apple", "banana", "cherry"}

fruits.add("orange")
print(fruits)

fruits.remove("banana")
print(fruits)

fruits.discard("grape")  # This won't raise an error
print(fruits)
            </div>
            <p class="tutorial-text">
                Your turn! Using the <code>colors</code> set from the previous exercise:
            </p>
            <ol class="tutorial-text">
                <li>Add "yellow" to the set</li>
                <li>Remove "green" from the set</li>
                <li>Try to discard "purple" (which isn't in the set)</li>
                <li>Print the set after each operation</li>
            </ol>
        `,
        initialCode: "colors = {'red', 'green', 'blue'}\n\n# Your code here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Set Operations",
        content: `
            <h2 class="tutorial-title">Exercise 3: Set Operations</h2>
            <p class="tutorial-text">
                Sets in Python support various mathematical operations that are very useful in programming.
            </p>
            <div class="hint-box">
                <h3>Common Set Operations</h3>
                <ul>
                    <li><code>union()</code> or <code>|</code>: Combines elements from both sets</li>
                    <li><code>intersection()</code> or <code>&</code>: Returns elements common to both sets</li>
                    <li><code>difference()</code> or <code>-</code>: Returns elements in one set but not in the other</li>
                    <li><code>symmetric_difference()</code> or <code>^</code>: Returns elements in either set, but not in both</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example:
            </p>
            <div class="code-block">
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

print("Union:", set1 | set2)
print("Intersection:", set1 & set2)
print("Difference (set1 - set2):", set1 - set2)
print("Symmetric Difference:", set1 ^ set2)
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Create two sets: <code>fruits1</code> with "apple", "banana", "cherry" and <code>fruits2</code> with "banana", "orange", "kiwi"</li>
                <li>Find and print the union of the two sets</li>
                <li>Find and print the intersection of the two sets</li>
                <li>Find and print the difference of fruits1 and fruits2</li>
                <li>Find and print the symmetric difference of the two sets</li>
            </ol>
        `,
        initialCode: "# Create the two fruit sets and perform set operations\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Sets vs Lists and Tuples",
        content: `
            <h2 class="tutorial-title">Exercise 4: Sets vs Lists and Tuples</h2>
            <p class="tutorial-text">
                Now that we've learned about sets, let's compare them with lists and tuples to understand when to use each.
            </p>
            <div class="hint-box">
                <h3>Sets vs Lists and Tuples</h3>
                <ul>
                    <li>Sets are unordered; lists and tuples maintain order</li>
                    <li>Sets contain only unique elements; lists and tuples can have duplicates</li>
                    <li>Sets are mutable (can be changed) like lists, but their elements must be immutable</li>
                    <li>Sets are faster for checking if an item is present</li>
                </ul>
            </div>
            <p class="tutorial-text">
                Here's an example showing some differences:
            </p>
            <div class="code-block">
# List
numbers_list = [1, 2, 2, 3, 4, 4, 5]
print("List:", numbers_list)

# Tuple
numbers_tuple = (1, 2, 2, 3, 4, 4, 5)
print("Tuple:", numbers_tuple)

# Set
numbers_set = {1, 2, 2, 3, 4, 4, 5}
print("Set:", numbers_set)

# Check if 3 is in each collection
print("Is 3 in list?", 3 in numbers_list)
print("Is 3 in tuple?", 3 in numbers_tuple)
print("Is 3 in set?", 3 in numbers_set)
            </div>
            <p class="tutorial-text">
                Your task:
            </p>
            <ol class="tutorial-text">
                <li>Create a list called <code>fruits_list</code> with "apple", "banana", "cherry", "apple", "date"</li>
                <li>Create a tuple called <code>fruits_tuple</code> with the same elements as the list</li>
                <li>Create a set called <code>fruits_set</code> from the list</li>
                <li>Print all three and observe the differences</li>
                <li>Check if "banana" is in each collection and print the results</li>
            </ol>
        `,
        initialCode: "# Create a list, tuple, and set of fruits, then compare them\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    },
    {
        title: "Weekly Project: Unique Word Counter",
        content: `
            <h2 class="tutorial-title">Weekly Project: Unique Word Counter</h2>
            <p class="tutorial-text">
                Let's put everything we've learned about sets into practice by creating a unique word counter.
            </p>
            <p class="tutorial-text">
                Your task is to create a program that:
            </p>
            <ol class="tutorial-text">
                <li>Takes a string of text as input</li>
                <li>Splits the text into words</li>
                <li>Counts the number of unique words using a set</li>
                <li>Prints the total number of words and the number of unique words</li>
                <li>Prints the unique words in alphabetical order</li>
            </ol>
            <p class="tutorial-text">
                Here's a starting template:
            </p>
            <div class="code-block">
def count_unique_words(text):
    # Your code here
    pass

# Test the function
sample_text = "The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away."
result = count_unique_words(sample_text)
print(result)
            </div>
            <p class="tutorial-text">
                Implement the <code>count_unique_words</code> function. Here are some hints:
            </p>
            <ul class="tutorial-text">
                <li>Use the <code>split()</code> method to separate words</li>
                <li>Convert words to lowercase to avoid counting "The" and "the" as different words</li>
                <li>Use a set to store unique words</li>
                <li>Return a tuple containing the total word count, unique word count, and sorted list of unique words</li>
            </ul>
            <p class="tutorial-text">
                This project will give you hands-on experience with sets and reinforce the concepts we've covered this week. Good luck!
            </p>
        `,
        initialCode: "# Implement your Unique Word Counter here\n",
        expectedOutput: null,
        showCompiler: true,
        showAutograder: false
    }
];
