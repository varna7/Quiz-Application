package com.achuttan.questionservice.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.achuttan.questionservice.model.Question;

@Repository
public interface QuestionDao extends JpaRepository<Question, Integer>{
	
	List<Question> findByCategory(String category);

	
	@Query(value = "SELECT q.id FROM question q Where q.category=:categoryName ORDER BY RAND() LIMIT :numQuestions",nativeQuery = true)
	List<Integer> findRandomQuestionByCategory(String categoryName, Integer numQuestions);

}
