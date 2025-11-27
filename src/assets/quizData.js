import { Binary, Cpu, Database } from "lucide-react";

const quizData = {
  dsa: {
    title: "Data Structures & Algorithms",
    icon: Binary,
    color: "#3b82f6",
    gradientFrom: "#60a5fa",
    gradientTo: "#2563eb",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: "O(log n)"
      },
      {
        id: 2,
        question: "Which data structure uses LIFO principle?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        correct: "Stack"
      },
      {
        id: 3,
        question: "What is the best case time complexity of QuickSort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correct: "O(n log n)"
      },
      {
        id: 4,
        question: "In a binary tree, what is the maximum number of nodes at level 3?",
        options: ["4", "8", "16", "32"],
        correct: "8"
      },
      {
        id: 5,
        question: "Which traversal visits nodes in ascending order in a BST?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        correct: "Inorder"
      }
    ]
  },
  os: {
    title: "Operating Systems",
    icon: Cpu,
    color: "#3b82f6",
    gradientFrom: "#4ade80",
    gradientTo: "#059669",
    questions: [
      {
        id: 1,
        question: "What is a process in an operating system?",
        options: ["A program in execution", "A stored program", "A file", "A thread"],
        correct: "A program in execution"
      },
      {
        id: 2,
        question: "Which scheduling algorithm can cause starvation?",
        options: ["Round Robin", "FCFS", "Priority Scheduling", "SJF"],
        correct: "Priority Scheduling"
      },
      {
        id: 3,
        question: "What is the purpose of paging?",
        options: ["File management", "Memory management", "Process scheduling", "I/O control"],
        correct: "Memory management"
      },
      {
        id: 4,
        question: "Which system call is used to create a new process?",
        options: ["exec()", "fork()", "wait()", "exit()"],
        correct: "fork()"
      },
      {
        id: 5,
        question: "What is a deadlock?",
        options: ["Process termination", "Infinite loop", "Mutual blocking of processes", "Memory leak"],
        correct: "Mutual blocking of processes"
      }
    ]
  },
  dbms: {
    title: "Database Management Systems",
    icon: Database,
    color: "#3b82f6",
    gradientFrom: "#fbbf24",
    gradientTo: "#d97706",
    questions: [
      {
        id: 1,
        question: "What does ACID stand for in databases?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Audit, Compliance, Identity, Distribution", "All, Create, Insert, Delete"],
        correct: "Atomicity, Consistency, Isolation, Durability"
      },
      {
        id: 2,
        question: "Which normal form eliminates partial dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correct: "2NF"
      },
      {
        id: 3,
        question: "What type of join returns all records from both tables?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        correct: "FULL OUTER JOIN"
      },
      {
        id: 4,
        question: "Which SQL clause is used to filter grouped results?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        correct: "HAVING"
      },
      {
        id: 5,
        question: "What is the primary key constraint?",
        options: ["Allows duplicates", "Can be null", "Uniquely identifies records", "Foreign reference"],
        correct: "Uniquely identifies records"
      }
    ]
  }
};

export default quizData