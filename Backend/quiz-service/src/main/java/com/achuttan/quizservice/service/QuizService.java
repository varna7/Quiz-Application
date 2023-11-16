package com.achuttan.quizservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.achuttan.quizservice.dao.QuizDao;
import com.achuttan.quizservice.feign.QuizInterface;
import com.achuttan.quizservice.model.QuestionWrapper;
import com.achuttan.quizservice.model.Quiz;
import com.achuttan.quizservice.model.Response;

@Service
public class QuizService {

    @Autowired
    QuizDao quizDao;
    @Autowired
    QuizInterface quizInterface;


    public ResponseEntity<String> createQuiz(String category, int numQ, String title) {
    	List<Integer> questions = quizInterface.getQuestionsForQuiz(category,numQ).getBody();
    	Quiz quiz = new Quiz();
    	quiz.setTitle(title);
    	quiz.setQuestionIds(questions);
    	quizDao.save(quiz);
        return new ResponseEntity<>("Success", HttpStatus.CREATED);

    }

    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
        Quiz quiz = quizDao.findById(id).get();
        List<Integer> questiomIds = quiz.getQuestionIds();
        ResponseEntity<List<QuestionWrapper>> questions = quizInterface.getQuestionsFromId(questiomIds);

        return questions;

    }

    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
    	ResponseEntity<Integer> score = quizInterface.getScore(responses);
        return score;
    }
}