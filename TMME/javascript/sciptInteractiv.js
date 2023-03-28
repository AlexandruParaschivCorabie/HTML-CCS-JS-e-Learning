var myQuestions = [
	{
		question: "1.What happens when the backtracking algorithm reaches a complete solution?",
		answers: {
			a: 'It backtracks to the root',
			b: 'It continues searching for other possible solutions',
			c: 'It traverses from a different route',
			d: 'Recursively traverses through the same route'
		},
		correctAnswer: 'b'
	},

	{
		question: "2.In what manner is a state-space tree for a backtracking algorithm constructed?",
		answers: {
			a: 'Depth-first search',
			b: 'Breadth-first search',
			c: 'Twice around the tree',
			d: 'Nearest neighbour first'
		},
		correctAnswer: 'a'
	},

	{
		question: "3.In general, backtracking can be used to solve?",
		answers: {
			a: 'Numerical problems',
			b: 'Exhaustive search',
			c: 'Combinatorial problems',
			d: 'Graph coloring problems'
		},
		correctAnswer: 'c'
	},

	{
		question: "4...... enumerates a list of promising nodes that could be computed to give the possible solutions of a given problem.",
		answers: {
			a: 'Exhaustive search',
			b: 'Brute force',
			c: 'Backtracking',
			d: 'Divide and conquer'
		},
		correctAnswer: 'c'
	},

	{
		question: "5.The problem of placing n queens in a chessboard such that no two queens attack each other is called as?",
		answers: {
			a: 'n-queen problem',
			b: 'eight queens puzzle',
			c: 'four queens puzzle',
			d: '1-queen problem'
		},
		correctAnswer: 'a'
	}
	

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label><br>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}