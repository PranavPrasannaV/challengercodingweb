export const python2Test = {
    quiz: [
        {
            question: "1. What is the output of the following code?\n\ndef recursive_sum(n):\n    if n <= 1:\n        return n\n    else:\n        return n + recursive_sum(n - 1)\n\nprint(recursive_sum(5))",
            options: [
                { label: "10", value: "a" },
                { label: "15", value: "b" },
                { label: "20", value: "c" },
                { label: "25", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "2. What will be the output of the following code?\n\nclass Animal:\n    def speak(self):\n        print(\"Animal speaks\")\n\nclass Dog(Animal):\n    def speak(self):\n        print(\"Dog barks\")\n\nclass Labrador(Dog):\n    pass\n\nlab = Labrador()\nlab.speak()",
            options: [
                { label: "Animal speaks", value: "a" },
                { label: "Dog barks", value: "b" },
                { label: "Labrador barks", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "3. What is the output of the following code?\n\ndef modify_list(lst):\n    lst.append(4)\n    lst = [1, 2, 3]\n    print(\"Inside function:\", lst)\n\nmy_list = [1, 2, 3]\nmodify_list(my_list)\nprint(\"Outside function:\", my_list)",
            options: [
                { label: "Inside function: [1, 2, 3], Outside function: [1, 2, 3]", value: "a" },
                { label: "Inside function: [1, 2, 3], Outside function: [1, 2, 3, 4]", value: "b" },
                { label: "Inside function: [1, 2, 3, 4], Outside function: [1, 2, 3, 4]", value: "c" },
                { label: "Inside function: [1, 2, 3], Outside function: [1, 2, 3]", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "4. What is the purpose of the `__init__` method in Python classes?",
            options: [
                { label: "To initialize class variables", value: "a" },
                { label: "To define class methods", value: "b" },
                { label: "To create a new instance of the class", value: "c" },
                { label: "To delete the class instance", value: "d" }
            ],
            correctAnswer: "a"
        },
        {
            question: "5. What is the output of the following code?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
            options: [
                { label: "[1, 2, 3]", value: "a" },
                { label: "[1, 2, 3, 4]", value: "b" },
                { label: "[4, 1, 2, 3]", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "6. Which of the following is true about Python sets?",
            options: [
                { label: "Sets are ordered collections", value: "a" },
                { label: "Sets can contain duplicate elements", value: "b" },
                { label: "Sets are mutable", value: "c" },
                { label: "Sets can only contain numbers", value: "d" }
            ],
            correctAnswer: "c"
        },
        {
            question: "7. What is the output of the following code?\n\ndef outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x = 2\n        print(\"Inner:\", x)\n    inner()\n    print(\"Outer:\", x)\n\nouter()",
            options: [
                { label: "Inner: 1, Outer: 1", value: "a" },
                { label: "Inner: 2, Outer: 1", value: "b" },
                { label: "Inner: 2, Outer: 2", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "c"
        },
        {
            question: "8. What is the purpose of the `super()` function in Python?",
            options: [
                { label: "To call a superclass method", value: "a" },
                { label: "To create a new instance of a class", value: "b" },
                { label: "To define a new class", value: "c" },
                { label: "To delete a class instance", value: "d" }
            ],
            correctAnswer: "a"
        },
        {
            question: "9. What is the output of the following code?\n\nclass A:\n    def __init__(self):\n        self.x = 1\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.y = 2\n\nb = B()\nprint(b.x, b.y)",
            options: [
                { label: "1 2", value: "a" },
                { label: "1 None", value: "b" },
                { label: "None 2", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "a"
        },
        {
            question: "10. What is the time complexity of accessing an element in a dictionary by its key?",
            options: [
                { label: "O(1)", value: "a" },
                { label: "O(n)", value: "b" },
                { label: "O(log n)", value: "c" },
                { label: "O(n^2)", value: "d" }
            ],
            correctAnswer: "a"
        },
        {
            question: "11. What is the output of the following code?\n\ndef generator():\n    yield 1\n    yield 2\n    yield 3\n\ng = generator()\nprint(next(g))\nprint(next(g))",
            options: [
                { label: "1 1", value: "a" },
                { label: "1 2", value: "b" },
                { label: "1 3", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "12. Which of the following is NOT a valid way to create a set in Python?",
            options: [
                { label: "set()", value: "a" },
                { label: "{1, 2, 3}", value: "b" },
                { label: "set([1, 2, 3])", value: "c" },
                { label: "{1: 'one', 2: 'two'}", value: "d" }
            ],
            correctAnswer: "d"
        },
        {
            question: "13. What is the output of the following code?\n\nclass MyClass:\n    class_var = 0\n    def __init__(self):\n        self.instance_var = 0\n    def increment(self):\n        self.instance_var += 1\n        self.class_var += 1\n\nobj1 = MyClass()\nobj2 = MyClass()\nobj1.increment()\nobj2.increment()\nprint(obj1.instance_var, obj1.class_var)\nprint(obj2.instance_var, obj2.class_var)",
            options: [
                { label: "1 1, 1 1", value: "a" },
                { label: "1 2, 1 2", value: "b" },
                { label: "1 1, 1 2", value: "c" },
                { label: "1 2, 1 1", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "14. What is the purpose of the `__str__` method in Python classes?",
            options: [
                { label: "To define how an object should be represented as a string", value: "a" },
                { label: "To initialize class variables", value: "b" },
                { label: "To compare two objects", value: "c" },
                { label: "To delete an object", value: "d" }
            ],
            correctAnswer: "a"
        },
        {
            question: "15. What is the output of the following code?\n\ndef decorator(func):\n    def wrapper():\n        print(\"Before\")\n        func()\n        print(\"After\")\n    return wrapper\n\n@decorator\ndef say_hello():\n    print(\"Hello\")\n\nsay_hello()",
            options: [
                { label: "Hello", value: "a" },
                { label: "Before Hello After", value: "b" },
                { label: "Before After Hello", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "16. Which of the following is true about Python's garbage collection?",
            options: [
                { label: "It uses reference counting", value: "a" },
                { label: "It uses a mark-and-sweep algorithm", value: "b" },
                { label: "It uses both reference counting and generational garbage collection", value: "c" },
                { label: "Python doesn't have garbage collection", value: "d" }
            ],
            correctAnswer: "c"
        },
        {
            question: "17. What is the output of the following code?\n\nimport copy\n\noriginal = [[1, 2, 3], [4, 5, 6]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\n\noriginal[0][1] = 10\nprint(shallow[0][1], deep[0][1])",
            options: [
                { label: "2 2", value: "a" },
                { label: "10 2", value: "b" },
                { label: "10 10", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "18. What is the purpose of the `__slots__` attribute in Python classes?",
            options: [
                { label: "To define class methods", value: "a" },
                { label: "To restrict the attributes that can be added to an instance", value: "b" },
                { label: "To create class variables", value: "c" },
                { label: "To define abstract methods", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "19. What is the output of the following code?\n\nclass Meta(type):\n    def __new__(cls, name, bases, attrs):\n        attrs['x'] = 10\n        return super().__new__(cls, name, bases, attrs)\n\nclass MyClass(metaclass=Meta):\n    pass\n\nobj = MyClass()\nprint(obj.x)",
            options: [
                { label: "10", value: "a" },
                { label: "None", value: "b" },
                { label: "Error", value: "c" },
                { label: "0", value: "d" }
            ],
            correctAnswer: "a"
        },
        {
            question: "20. Which of the following is NOT a valid magic method in Python?",
            options: [
                { label: "__init__", value: "a" },
                { label: "__str__", value: "b" },
                { label: "__eq__", value: "c" },
                { label: "__create__", value: "d" }
            ],
            correctAnswer: "d"
        },
        {
            question: "21. What is the output of the following code?\n\ndef func(a, b, c=3, d=4):\n    print(a, b, c, d)\n\nfunc(1, *(5,), **{'c': 9})",
            options: [
                { label: "1 5 3 4", value: "a" },
                { label: "1 5 9 4", value: "b" },
                { label: "Error", value: "c" },
                { label: "1 5 3 9", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "22. What is the purpose of the `contextlib` module in Python?",
            options: [
                { label: "To handle file I/O operations", value: "a" },
                { label: "To create and manage context managers", value: "b" },
                { label: "To handle network connections", value: "c" },
                { label: "To manage database connections", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "23. What is the output of the following code?\n\nclass A:\n    def __init__(self):\n        print(\"A\")\n        super().__init__()\n\nclass B:\n    def __init__(self):\n        print(\"B\")\n        super().__init__()\n\nclass C(A, B):\n    def __init__(self):\n        print(\"C\")\n        super().__init__()\n\nC()",
            options: [
                { label: "C A B", value: "a" },
                { label: "C B A", value: "b" },
                { label: "A B C", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "a"
        },
        {
            question: "24. Which of the following is true about Python's Global Interpreter Lock (GIL)?",
            options: [
                { label: "It allows multiple threads to execute Python bytecode at once", value: "a" },
                { label: "It prevents multiple threads from executing Python bytecode at once", value: "b" },
                { label: "It only affects CPython implementation", value: "c" },
                { label: "Both b and c", value: "d" }
            ],
            correctAnswer: "d"
        },
        {
            question: "25. What is the output of the following code?\n\nimport asyncio\n\nasync def foo():\n    print(\"start\")\n    await asyncio.sleep(1)\n    print(\"end\")\n\nasyncio.run(foo())",
            options: [
                { label: "start", value: "a" },
                { label: "end", value: "b" },
                { label: "start end", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "c"
        },
        {
            question: "26. What is the purpose of the `__all__` variable in Python modules?",
            options: [
                { label: "To define all variables in a module", value: "a" },
                { label: "To specify which names should be imported when using `from module import *`", value: "b" },
                { label: "To create a list of all functions in a module", value: "c" },
                { label: "To define abstract methods in a class", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "27. What is the output of the following code?\n\nclass MyDict(dict):\n    def __setitem__(self, key, value):\n        super().__setitem(key, value * 2)\n\nd = MyDict()\nd['a'] = 1\nprint(d['a'])",
            options: [
                { label: "1", value: "a" },
                { label: "2", value: "b" },
                { label: "None", value: "c" },
                { label: "Error", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "28. Which of the following is true about Python's memory management?",
            options: [
                { label: "Python uses manual memory management", value: "a" },
                { label: "Python uses automatic garbage collection", value: "b" },
                { label: "Python doesn't have memory management", value: "c" },
                { label: "Python uses static memory allocation", value: "d" }
            ],
            correctAnswer: "b"
        },
        {
            question: "29. What is the output of the following code?\n\nfrom functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(100))",
            options: [
                { label: "354224848179261915075", value: "a" },
                { label: "Error: maximum recursion depth exceeded", value: "b" },
                { label: "100", value: "c" },
                { label: "0", value: "d" }
            ],
            correctAnswer: "a"
        },
        {
            question: "30. What is the purpose of the `__slots__` attribute in Python classes?",
            options: [
                { label: "To define class methods", value: "a" },
                { label: "To restrict the attributes that can be added to an instance", value: "b" },
                { label: "To create class variables", value: "c" },
                { label: "To define abstract methods", value: "d" }
            ],
            correctAnswer: "b"
        }
    ],
    freeResponse: [
        {
            title: "Free Response Question 1: Recursive Factorial",
            content: `
                <h2 class="tutorial-title">Free Response Question 1: Recursive Factorial</h2>
                <p class="tutorial-text">
                    Implement a recursive function to calculate the factorial of a number.
                </p>
            `,
            initialCode: "def factorial(n):\n    # Your code here\n    pass\n\n# Test your function\nprint(factorial(5))  # Should output 120\n",
            expectedOutput: null,
            showCompiler: true,
            showAutograder: false
        },
        {
            title: "Free Response Question 2: Shape Class Hierarchy",
            content: `
                <h2 class="tutorial-title">Free Response Question 2: Shape Class Hierarchy</h2>
                <p class="tutorial-text">
                    Implement a class hierarchy for shapes (Circle and Rectangle) with a method to calculate area.
                </p>
            `,
            initialCode: "class Shape:\n    # Your code here\n    pass\n\nclass Circle(Shape):\n    # Your code here\n    pass\n\nclass Rectangle(Shape):\n    # Your code here\n    pass\n\n# Test your classes\ncircle = Circle(5)\nrectangle = Rectangle(4, 6)\nprint(f\"Circle area: {circle.area()}\")\nprint(f\"Rectangle area: {rectangle.area()}\")\n",
            expectedOutput: null,
            showCompiler: true,
            showAutograder: false
        }
    ]
};
