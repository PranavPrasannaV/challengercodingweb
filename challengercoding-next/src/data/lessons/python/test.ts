export const pythonTest = {
    quiz: [
        {
            question: 'What will the following code print?\n\nprint(\'Hello, World!\')',
            options: [
                { label: 'Hello World', value: 'a' },
                { label: 'Hello, World!', value: 'b' },
                { label: "'Hello, World!'", value: 'c' },
                { label: 'None of the above', value: 'd' }
            ],
            correctAnswer: 'b'
        },
        {
            question: 'Which of the following is a correct way to declare a variable in Python?',
            options: [
                { label: 'var x = 10', value: 'a' },
                { label: 'int x = 10', value: 'b' },
                { label: 'x = 10', value: 'c' },
                { label: 'declare x = 10', value: 'd' }
            ],
            correctAnswer: 'c'
        },
        {
            question: 'What function is used to get input from the user?',
            options: [
                { label: 'input()', value: 'a' },
                { label: 'get_input()', value: 'b' },
                { label: 'read()', value: 'c' },
                { label: 'user_input()', value: 'd' }
            ],
            correctAnswer: 'a'
        },
        {
            question: 'What is the output of the following code?\n\nx = 5\ny = 10\nif x > y:\n    print("x is greater than y")\nelse:\n    print("x is less than or equal to y")',
            options: [
                { label: 'x is greater than y', value: 'a' },
                { label: 'x is less than or equal to y', value: 'b' },
                { label: 'Error', value: 'c' },
                { label: 'No output', value: 'd' }
            ],
            correctAnswer: 'b'
        },
        {
            question: 'Which of the following is an example of a list in Python?',
            options: [
                { label: '[1, 2, 3, 4]', value: 'a' },
                { label: '{1, 2, 3, 4}', value: 'b' },
                { label: '(1, 2, 3, 4)', value: 'c' },
                { label: '<1, 2, 3, 4>', value: 'd' }
            ],
            correctAnswer: 'a'
        },
        {
            question: 'What will the following code snippet do?\n\nmy_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)',
            options: [
                { label: '[1, 2, 3]', value: 'a' },
                { label: '[1, 2, 3, 4]', value: 'b' },
                { label: '[4, 1, 2, 3]', value: 'c' },
                { label: 'Error', value: 'd' }
            ],
            correctAnswer: 'b'
        },
        {
            question: 'Which statement correctly uses a loop to print numbers 0 to 9?',
            options: [
                { label: 'for i in range(10): print(i)', value: 'a' },
                { label: 'for i in range(0, 10): print(i)', value: 'b' },
                { label: 'while i < 10: print(i)', value: 'c' },
                { label: 'All of the above', value: 'd' }
            ],
            correctAnswer: 'd'
        },
        {
            question: 'What does the following code do?\n\nfor i in range(3):\n    print(i)',
            options: [
                { label: 'Prints 1, 2, 3', value: 'a' },
                { label: 'Prints 0, 1, 2', value: 'b' },
                { label: 'Prints 0, 1, 2, 3', value: 'c' },
                { label: 'Error', value: 'd' }
            ],
            correctAnswer: 'b'
        },
        {
            question: 'How do you define a function in Python?',
            options: [
                { label: 'function myFunc()', value: 'a' },
                { label: 'def myFunc():', value: 'b' },
                { label: 'define myFunc()', value: 'c' },
                { label: 'func myFunc()', value: 'd' }
            ],
            correctAnswer: 'b'
        },
        {
            question: 'What will the following code output?\n\ndef greet(name):\n    return "Hello, " + name\n\nprint(greet("Alice"))',
            options: [
                { label: 'Hello, name', value: 'a' },
                { label: 'Hello, Alice', value: 'b' },
                { label: 'Alice', value: 'c' },
                { label: 'Error', value: 'd' }
            ],
            correctAnswer: 'b'
        },
        {
            question: 'Which of the following is NOT a valid way to create a string in Python?',
            options: [
                { label: "'Hello'", value: 'a' },
                { label: '"Hello"', value: 'b' },
                { label: "'''Hello'''", value: 'c' },
                { label: 'str(Hello)', value: 'd' }
            ],
            correctAnswer: 'd'
        },
        {
            question: 'What is the result of 3 * \'abc\'?',
            options: [
                { label: 'abcabcabc', value: 'a' },
                { label: 'abc3', value: 'b' },
                { label: '3abc', value: 'c' },
                { label: 'Error', value: 'd' }
            ],
            correctAnswer: 'a'
        },
        {
            question: 'Which of the following is used to comment out multiple lines in Python?',
            options: [
                { label: '// Comment', value: 'a' },
                { label: '# Comment', value: 'b' },
                { label: '/* Comment */', value: 'c' },
                { label: "''' Comment '''", value: 'd' }
            ],
            correctAnswer: 'd'
        },
        {
            question: 'What is the output of the following code?\n\nx = 5\nprint(x > 3 and x < 10)',
            options: [
                { label: 'True', value: 'a' },
                { label: 'False', value: 'b' },
                { label: '5', value: 'c' },
                { label: 'Error', value: 'd' }
            ],
            correctAnswer: 'a'
        },
        {
            question: 'Which of the following is used to remove an item from a list by its index?',
            options: [
                { label: 'list.remove(index)', value: 'a' },
                { label: 'list.pop(index)', value: 'b' },
                { label: 'list.delete(index)', value: 'c' },
                { label: 'del list[index]', value: 'd' }
            ],
            correctAnswer: 'b'
        },
        {
            question: 'What is the output of the following code?\n\nprint(2 ** 3)',
            options: [
                { label: '6', value: 'a' },
                { label: '8', value: 'b' },
                { label: '5', value: 'c' },
                { label: '9', value: 'd' }
            ],
            correctAnswer: 'b'
        },
        {
            question: 'Which of the following is used to format strings in Python?',
            options: [
                { label: 'f"Hello, {name}"', value: 'a' },
                { label: '"Hello, %s" % name', value: 'b' },
                { label: '"Hello, {}".format(name)', value: 'c' },
                { label: 'All of the above', value: 'd' }
            ],
            correctAnswer: 'd'
        },
        {
            question: 'What is the result of 10 / 3 in Python 3?',
            options: [
                { label: '3', value: 'a' },
                { label: '3.0', value: 'b' },
                { label: '3.33', value: 'c' },
                { label: '3.3333333333333335', value: 'd' }
            ],
            correctAnswer: 'd'
        },
        {
            question: 'Which of the following is used to get the length of a list?',
            options: [
                { label: 'list.length()', value: 'a' },
                { label: 'list.size()', value: 'b' },
                { label: 'len(list)', value: 'c' },
                { label: 'sizeof(list)', value: 'd' }
            ],
            correctAnswer: 'c'
        },
        {
            question: 'What is the output of the following code?\n\nprint(bool(0), bool(1), bool(""))',
            options: [
                { label: 'False True False', value: 'a' },
                { label: 'True True True', value: 'b' },
                { label: 'False True True', value: 'c' },
                { label: 'True False True', value: 'd' }
            ],
            correctAnswer: 'a'
        }
    ],
    codingExercises: [
        {
            title: "Sum Even Numbers",
            content: `
                <h3>Free Response Question 1: Write a function that takes a list of numbers and returns the sum of all even numbers in the list.</h3>
            `,
            initialCode: `def sum_even_numbers(numbers):
    # Your code here
    pass

# Test your function
print(sum_even_numbers([1, 2, 3, 4, 5, 6]))  # Should output 12
`,
            expectedOutput: "12",
            showCompiler: true,
            showAutograder: true
        },
        {
            title: "Fibonacci Sequence",
            content: `
                <h3>Free Response Question 2: Write a program that prints the Fibonacci sequence up to a given number of terms.</h3>
            `,
            initialCode: `def fibonacci(n):
    # Your code here
    pass

# Test your function
fibonacci(10)  # Should print the first 10 Fibonacci numbers
`,
            expectedOutput: null,
            showCompiler: true,
            showAutograder: false
        }
    ]
};
