# Challenge made by Rocket.chat
The test should do as specified:

Backend Interview Challenge
Defined goal is to build high-quality training data to fuel AI applications by having users executing tasks like audio to text transcription, image categorization, sentiment annotation, among others. To complete this exercise write a program in JavaScript or TypeScript that calculates the average time spent executing tasks, broken down by user and by country.


In the first line of the input you can find the number of users on the platform (N). The following N lines contain the ID and country code for each user. Please note that the ID of the user is numerical. The line after the ID and the country code of all users contains the number of tasks executed in the platform (T); followed by T lines containing the ID of the task, the ID of the user that executed it and the time spent in the task, in seconds.


The program should generate the following output: 1) the average time spent by users, 2) the average time spent by country. Each output should be sorted ascending. Users and countries without any mention should be included in the output, 3) export a default method receiving the content as string. Below you can find a quick example of the input and output formats. Please note that the average output should be rounded to the second decimal place.


Bonus 1: Wrapper file importing your method and reading the input async from a txt file.

Bonus 2: Write unit tests.


Input:

```

3

1 JP

2 US

3 PT

3

1 2 10

2 3 5

3 3 10

```


Output:

```

1 0.00

2 10.00

3 7.50

JP 0.00

PT 7.50

US 10.00

```


# Attention points

- Files not in the format will return error
- If an not mapped id from a country is present in an task run, it will be ignored.

# How to run
- Use, yarn to install the modules and yarn start to start the project (the path in passed trough index, you can change it o use the default path that is passed inside the /src/tasks/func.js) more paths included in config.js file.
- Yarn test is available
