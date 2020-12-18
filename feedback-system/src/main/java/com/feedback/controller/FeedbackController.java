package com.feedback.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.model.Feedback;
import com.feedback.repository.FeedbackRepository;


@RestController 
@CrossOrigin
public class FeedbackController {
	@Autowired
	FeedbackRepository feedbackrepository;
	
	@GetMapping("/feedback/{id}")
	public Feedback detail(@PathVariable(value = "id") long id) {
		Feedback feedback = new Feedback();
		feedback = feedbackrepository.findById(id).orElseThrow();
		return feedback;
	}
	@PostMapping("/feedback")
	public Feedback createFeedback(@RequestBody Feedback feedback) {
		return feedbackrepository.save(feedback);
	}
	@GetMapping("/feedbacks")
	public List<Feedback> getAllFeedback() {
	    return feedbackrepository.findAll();
	}

}
