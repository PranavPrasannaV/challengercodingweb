export const java2Lesson6 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="tutorial-title">Java 2 Guided Tutorials - Week 6: Lists</h2>
            <div class="content-box">
                <h2 class="text-2xl font-semibold mb-4">What You'll Learn</h2>
                <p class="tutorial-text">
                    Welcome to Week 6 of Java 2! This week, we'll dive into Lists, a fundamental data structure in Java. Lists are ordered collections that allow duplicate elements and provide powerful ways to store and manipulate data.
                </p>
                <div class="highlight-box">
                    <h3 class="text-xl font-semibold mb-2">Lesson Overview:</h3>
                    <ul class="list-disc list-inside">
                        <li>Introduction to Lists</li>
                        <li>ArrayList</li>
                        <li>List Operations</li>
                        <li>Iterating Through Lists</li>
                        <li>Quiz to test your knowledge</li>
                        <li>Weekly project to apply what you've learned</li>
                    </ul>
                </div>
                <p class="tutorial-text">
                    By the end of this week, you'll have a solid understanding of Lists in Java and how to use them effectively in your programs. Let's get started!
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Introduction to Lists",
        content: `
            <h2 class="tutorial-title">1. Introduction to Lists</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">What are Lists?</h3>
                <p class="tutorial-text">
                    In Java, a List is an ordered collection (also known as a sequence) that allows duplicate elements. It is part of the Java Collections Framework and is defined in the java.util package.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Characteristics of Lists:</h4>
                    <ul class="list-disc list-inside">
                        <li>Ordered collection (elements have a specific order)</li>
                        <li>Allow duplicate elements</li>
                        <li>Elements can be accessed by their index</li>
                        <li>Dynamic size (can grow or shrink as needed)</li>
                    </ul>
                </div>
                <p class="tutorial-text">The List interface in Java has several implementations, including ArrayList and LinkedList, which we'll explore in detail.</p>
                <pre><code>import java.util.List;
import java.util.ArrayList;

public class ListExample {
    public static void main(String[] args) {
        // Creating a List of Strings
        List<String> fruits = new ArrayList<>();

        // Adding elements to the List
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // Printing the List
        System.out.println("Fruits: " + fruits);

        // Accessing elements by index
        System.out.println("First fruit: " + fruits.get(0));

        // Checking if an element exists
        System.out.println("Contains 'Banana': " + fruits.contains("Banana"));

        // Getting the size of the List
        System.out.println("Number of fruits: " + fruits.size());
    }
}</code></pre>
                <p class="tutorial-text">This example demonstrates creating a List, adding elements, accessing elements, and performing basic operations. Try running this code in the compiler below and experiment with different List operations.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Fruits: [Apple, Banana, Orange]\nFirst fruit: Apple\nContains 'Banana': true\nNumber of fruits: 3"
    },
    {
        title: "ArrayList",
        content: `
            <h2 class="tutorial-title">2. ArrayList</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Understanding ArrayList</h3>
                <p class="tutorial-text">
                    ArrayList is one of the most commonly used List implementations in Java. It's backed by a dynamic array, which means it can grow or shrink as needed.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key Features of ArrayList:</h4>
                    <ul class="list-disc list-inside">
                        <li>Fast random access (constant-time complexity)</li>
                        <li>Good for storing and accessing data</li>
                        <li>Inefficient for inserting and removing elements (except at the end)</li>
                        <li>Not synchronized (not thread-safe)</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating the use of ArrayList:</p>
                <pre><code>import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();

        // Adding elements
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        System.out.println("ArrayList: " + numbers);

        // Adding an element at a specific index
        numbers.add(1, 15);
        System.out.println("After adding 15 at index 1: " + numbers);

        // Removing an element
        numbers.remove(2);
        System.out.println("After removing element at index 2: " + numbers);

        // Updating an element
        numbers.set(0, 5);
        System.out.println("After updating element at index 0: " + numbers);

        // Checking if an element exists
        System.out.println("Contains 20? " + numbers.contains(20));

        // Getting the size
        System.out.println("Size of ArrayList: " + numbers.size());
    }
}</code></pre>
                <p class="tutorial-text">Try running this code in the compiler and experiment with different ArrayList operations. Can you add more elements or perform other operations on the ArrayList?</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "ArrayList: [10, 20, 30]\nAfter adding 15 at index 1: [10, 15, 20, 30]\nAfter removing element at index 2: [10, 15, 30]\nAfter updating element at index 0: [5, 15, 30]\nContains 20? false\nSize of ArrayList: 3"
    },
    {
        title: "List Operations",
        content: `
            <h2 class="tutorial-title">4. List Operations</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Common List Operations</h3>
                <p class="tutorial-text">
                    Lists in Java provide a rich set of operations for manipulating and accessing data. Let's explore some common operations that can be performed on both ArrayList and LinkedList.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Key List Operations:</h4>
                    <ul class="list-disc list-inside">
                        <li>Adding elements</li>
                        <li>Removing elements</li>
                        <li>Accessing elements</li>
                        <li>Searching for elements</li>
                        <li>Sublist operations</li>
                        <li>Sorting</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating various List operations:</p>
                <pre><code>import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ListOperationsExample {
    public static void main(String[] args) {
        List<String> colors = new ArrayList<>();

        // Adding elements
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");
        colors.add("Yellow");
        System.out.println("Original list: " + colors);

        // Adding at a specific index
        colors.add(2, "Purple");
        System.out.println("After adding Purple at index 2: " + colors);

        // Removing an element
        colors.remove("Green");
        System.out.println("After removing Green: " + colors);

        // Removing by index
        colors.remove(1);
        System.out.println("After removing element at index 1: " + colors);

        // Checking if an element exists
        System.out.println("Contains Blue? " + colors.contains("Blue"));

        // Getting the index of an element
        System.out.println("Index of Yellow: " + colors.indexOf("Yellow"));

        // Getting a sublist
        List<String> subList = colors.subList(0, 2);
        System.out.println("Sublist (0 to 2): " + subList);

        // Sorting the list
        Collections.sort(colors);
        System.out.println("Sorted list: " + colors);

        // Reversing the list
        Collections.reverse(colors);
        System.out.println("Reversed list: " + colors);

        // Clearing the list
        colors.clear();
        System.out.println("After clearing: " + colors);
        System.out.println("Is the list empty? " + colors.isEmpty());
    }
}</code></pre>
                <p class="tutorial-text">Run this code in the compiler and observe how different List operations affect the collection. Try modifying the code to perform additional operations or use different data types.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Original list: [Red, Green, Blue, Yellow]\nAfter adding Purple at index 2: [Red, Green, Purple, Blue, Yellow]\nAfter removing Green: [Red, Purple, Blue, Yellow]\nAfter removing element at index 1: [Red, Blue, Yellow]\nContains Blue? true\nIndex of Yellow: 2\nSublist (0 to 2): [Red, Blue]\nSorted list: [Blue, Red, Yellow]\nReversed list: [Yellow, Red, Blue]\nAfter clearing: []\nIs the list empty? true"
    },
    {
        title: "Iterating Through Lists",
        content: `
            <h2 class="tutorial-title">5. Iterating Through Lists</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Ways to Iterate Through Lists</h3>
                <p class="tutorial-text">
                    Iterating through a List is a common operation in Java. There are several ways to do this, each with its own advantages and use cases.
                </p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Common Iteration Methods:</h4>
                    <ul class="list-disc list-inside">
                        <li>For-each loop (enhanced for loop)</li>
                        <li>Traditional for loop</li>
                        <li>Iterator</li>
                        <li>ListIterator</li>
                        <li>Java 8 forEach() method with lambda expressions</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's an example demonstrating different ways to iterate through a List:</p>
                <pre><code>import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class ListIterationExample {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Date");

        // 1. For-each loop
        System.out.println("Using for-each loop:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // 2. Traditional for loop
        System.out.println("\nUsing traditional for loop:");
        for (int i = 0; i < fruits.size(); i++) {
            System.out.println(fruits.get(i));
        }

        // 3. Iterator
        System.out.println("\nUsing Iterator:");
        Iterator<String> iterator = fruits.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // 4. ListIterator (allows backward iteration)
        System.out.println("\nUsing ListIterator (backward):");
        ListIterator<String> listIterator = fruits.listIterator(fruits.size());
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }

        // 5. Java 8 forEach() method with lambda
        System.out.println("\nUsing forEach() with lambda:");
        fruits.forEach(fruit -> System.out.println(fruit));

        // or more concisely:
        // fruits.forEach(System.out::println);
    }
}</code></pre>
                <p class="tutorial-text">Run this code in the compiler and observe the different ways of iterating through the List. Each method has its own advantages:

- For-each loop is concise and easy to read.
- Traditional for loop allows you to use the index if needed.
- Iterator is useful when you need to remove elements while iterating.
- ListIterator allows bidirectional traversal and modification.
- forEach() with lambda is a more functional approach introduced in Java 8.

Try modifying the code to perform operations on the elements while iterating, such as filtering or transforming the data.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Using for-each loop:\nApple\nBanana\nCherry\nDate\n\nUsing traditional for loop:\nApple\nBanana\nCherry\nDate\n\nUsing Iterator:\nApple\nBanana\nCherry\nDate\n\nUsing ListIterator (backward):\nDate\nCherry\nBanana\nApple\n\nUsing forEach() with lambda:\nApple\nBanana\nCherry\nDate"
    },
    {
        title: "Quiz",
        content: `
            <h2 class="tutorial-title">6. Lists Quiz</h2>
<div class="question">
                        <p class="quiz-question">2. Which List implementation is better for frequent insertions and deletions in the middle of the list?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="a" id="q2a">
                                <label for="q2a">ArrayList</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="b" id="q2b">
                                <label for="q2b">LinkedList</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q2" value="c" id="q2c">
                                <label for="q2c">Both perform equally</label>
                            </li>
                        </ul>
                    </div>
                    <div class="question">
                        <p class="quiz-question">3. Which method is used to add an element at a specific index in a List?</p>
                        <ul class="quiz-options">
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="a" id="q3a">
                                <label for="q3a">list.add(element)</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="b" id="q3b">
                                <label for="q3b">list.add(index, element)</label>
                            </li>
                            <li class="quiz-option">
                                <input type="radio" name="q3" value="c" id="q3c">
                                <label for="q3c">list.set(index, element)</label>
                            </li>
                        </ul>
                    </div>
                </form>
                <button class="button mt-4">Submit Quiz</button>
                <p id="quizResult" class="quiz-feedback"></p>
            </div>
        `,
        quiz: [
            {
                question: '1. Which of the following is NOT a characteristic of Java Lists?',
                options: [
                    { label: 'Ordered collection', value: 'a' },
                    { label: 'Allow duplicate elements', value: 'b' },
                    { label: 'Elements must be unique', value: 'c' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '2. Which List implementation is better for frequent insertions and deletions in the middle of the list?',
                options: [
                    { label: 'ArrayList', value: 'a' },
                    { label: 'LinkedList', value: 'b' },
                    { label: 'Both perform equally', value: 'c' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '3. Which method is used to add an element at a specific index in a List?',
                options: [
                    { label: 'list.add(element)', value: 'a' },
                    { label: 'list.add(index, element)', value: 'b' },
                    { label: 'list.set(index, element)', value: 'c' }
                ],
                correctAnswer: 'b'
            }
        ]
    },
    {
        title: "Weekly Project",
        content: `
            <h2 class="tutorial-title">7. Weekly Project: Task Manager</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Project Description</h3>
                <p class="tutorial-text">For this week's project, you'll create a simple Task Manager application using Lists. This project will help you apply the concepts you've learned about Lists and practice working with user input.</p>
                <div class="highlight-box">
                    <h4 class="text-lg font-semibold mb-2">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Create a Task class with properties like title, description, and status (completed or not)</li>
                        <li>Implement a TaskManager class that uses a List to store Task objects</li>
                        <li>Include methods to add tasks, mark tasks as completed, remove tasks, and list all tasks</li>
                        <li>Create a simple menu-driven interface for user interaction</li>
                        <li>Use appropriate List methods for managing the tasks</li>
                        <li>Implement error handling for invalid inputs</li>
                    </ul>
                </div>
                <p class="tutorial-text">Here's a template to get you started:</p>
                <pre><code>import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Task {
    // Implement Task class
}

class TaskManager {
    private List<Task> tasks;

    public TaskManager() {
        tasks = new ArrayList<>();
    }

    // Implement methods for managing tasks
}

public class TaskManagerApp {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n1. Add Task");
            System.out.println("2. Mark Task as Completed");
            System.out.println("3. Remove Task");
            System.out.println("4. List All Tasks");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    // Implement add task
                    break;
                case 2:
                    // Implement mark task as completed
                    break;
                case 3:
                    // Implement remove task
                    break;
                case 4:
                    // Implement list all tasks
                    break;
                case 5:
                    System.out.println("Exiting Task Manager. Goodbye!");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}</code></pre>
                <p class="tutorial-text">Implement the Task class and the methods in the TaskManager class. Use the List operations we've learned to manage the tasks effectively. Once you've completed the implementation, use the compiler to test your Task Manager application. Make sure to handle different scenarios, such as adding multiple tasks, marking them as completed, and removing tasks.</p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "1. Add Task\n2. Mark Task as Completed\n3. Remove Task\n4. List All Tasks\n5. Exit\nEnter your choice: 1\nTask added: Buy groceries\n1. Add Task\n2. Mark Task as Completed\n3. Remove Task\n4. List All Tasks\n5. Exit\nEnter your choice: 4\nTasks:\n1. Buy groceries (Not Completed)\n1. Add Task\n2. Mark Task as Completed\n3. Remove Task\n4. List All Tasks\n5. Exit\nEnter your choice: 2\nTask marked as completed: Buy groceries\n1. Add Task\n2. Mark Task as Completed\n3. Remove Task\n4. List All Tasks\n5. Exit\nEnter your choice: 4\nTasks:\n1. Buy groceries (Completed)\n1. Add Task\n2. Mark Task as Completed\n3. Remove Task\n4. List All Tasks\n5. Exit\nEnter your choice: 5\nExiting Task Manager. Goodbye!"
    }
];
