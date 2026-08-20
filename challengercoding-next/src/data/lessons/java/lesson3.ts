export const javaLesson3 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java Guided Tutorials - Conditionals</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">What You'll Learn</h2>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Welcome to our Java Conditionals Tutorial! In this lesson, you'll learn about conditional statements in Java, which allow your programs to make decisions and execute different code based on certain conditions.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 class="text-xl font-semibold mb-2 text-gray-800">Lesson Overview:</h3>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>Introduction to Conditionals in Java</li>
                        <li>Working with Nested If Statements</li>
                        <li>Using Logical Operators in Conditions</li>
                        <li>Weekly Project: Applying Conditionals</li>
                    </ul>
                </div>
                <p class="text-lg leading-relaxed text-gray-700 mt-4">
                    By the end of this lesson, you'll be able to use if-else statements, nested conditionals, and logical operators to create more complex and dynamic Java programs.
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Introduction to Conditionals",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">1. Introduction to Conditionals in Java</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">If-Else Statements</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Conditionals in Java allow you to execute certain blocks of code depending on whether a boolean condition is true or false. The most basic form is the if-else statement.
                </p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}</code></pre>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Let's practice with a simple grade calculator:</p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Try it Yourself</h4>
                    <p class="text-gray-700">Complete the GradeCalculator program below. Use if-else statements to assign the correct grade based on the score.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "C",
        initialCode: `public class GradeCalculator {
    public static void main(String[] args) {
        int score = 70;
        char grade;

        // Your code here
        // Use if-else statements to determine the grade
        // A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59

        System.out.println(grade);
    }
}`
    },
    {
        title: "Nested If Statements",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">2. Working with Nested If Statements in Java</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Nested Conditionals</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Nested if statements allow you to check multiple conditions in a more complex decision-making process. It's an if statement inside another if or else block.
                </p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>if (outerCondition) {
    if (innerCondition) {
        // code to execute if both conditions are true
    } else {
        // code to execute if outer is true but inner is false
    }
} else {
    // code to execute if outer condition is false
}</code></pre>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Try it Yourself</h4>
                    <p class="text-gray-700">Complete the MovieTicketPrice program. Use nested if statements to determine the ticket price based on age and whether it's a weekend.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Ticket Price: 15.0",
        initialCode: `public class MovieTicketPrice {
    public static void main(String[] args) {
        int age = 20;
        boolean isWeekend = true;
        double ticketPrice;

        // Your code here
        // Use nested if statements to determine the ticket price
        // Adult (18+) weekend price: $15, weekday price: $12
        // Child (<18) weekend price: $10, weekday price: $8

        System.out.println("Ticket Price: " + ticketPrice);
    }
}`
    },
    {
        title: "Logical Operators",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">3. Using Logical Operators in Java</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Combining Conditions</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Logical operators in Java allow you to combine multiple conditions in a single statement. The main logical operators are:
                </p>
                <ul class="list-disc list-inside mb-4 text-gray-700">
                    <li>AND (&&): Both conditions must be true</li>
                    <li>OR (||): At least one condition must be true</li>
                    <li>NOT (!): Inverts the boolean value</li>
                </ul>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>if (condition1 && condition2) {
    // Execute if both conditions are true
} else if (condition3 || condition4) {
    // Execute if either condition is true
} else if (!condition5) {
    // Execute if condition5 is false
}</code></pre>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Try it Yourself</h4>
                    <p class="text-gray-700">Complete the DiscountEligibility program. Use logical operators to determine if a person is eligible for a discount based on their age and membership status.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Eligible for Discount: false",
        initialCode: `public class DiscountEligibility {
    public static void main(String[] args) {
        int age = 30;
        boolean isMember = false;
        boolean eligibleForDiscount;

        // Your code here
        // Use logical operators to determine discount eligibility
        // Eligible if: (age >= 60 OR isMember == true) AND age >= 18

        System.out.println("Eligible for Discount: " + eligibleForDiscount);
    }
}`
    },
    {
        title: "Weekly Project",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">4. Weekly Project: Decision Maker</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Project Description</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Create a Java program that helps a user make a decision based on multiple inputs. This project will incorporate all the conditional concepts you've learned.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Requirements:</h4>
                    <ul class="list-disc list-inside mb-4 text-gray-700">
                        <li>Use at least one if-else statement</li>
                        <li>Include a nested if statement</li>
                        <li>Use logical operators to combine conditions</li>
                        <li>Provide at least three different possible outcomes</li>
                    </ul>
                </div>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Example idea: Create a program that suggests a mode of transportation based on distance, weather, and time constraints.
                </p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Implement the TransportationAdvisor program. Use the online compiler below to write and test your code. Once you're satisfied with your program, paste the output in the autograder to check your work.
                </p>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "Suggested transportation: Take the bus",
        initialCode: `public class TransportationAdvisor {
    public static void main(String[] args) {
        int distance = 5; // in kilometers
        boolean isRaining = true;
        int availableTime = 30; // in minutes

        String suggestedTransportation;

        // Your code here
        // Use if-else statements, nested ifs, and logical operators
        // to determine the suggested mode of transportation
        // Options: "Walk", "Bike", "Take the bus", "Drive a car"

        System.out.println("Suggested transportation: " + suggestedTransportation);
    }
}`
    }
];
