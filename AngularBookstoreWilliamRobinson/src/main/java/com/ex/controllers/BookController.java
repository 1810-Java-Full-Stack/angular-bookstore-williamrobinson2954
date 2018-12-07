package com.ex.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.Book;
import com.ex.service.BookService;

@RestController
@RequestMapping("/books") //this annotation can be applied to both classes and methods
public class BookController {
	
	@Autowired
	private BookService service;
	
	@RequestMapping(method=RequestMethod.GET, 
			produces=MediaType.APPLICATION_JSON_VALUE)
public List<Book> getAll(){
return service.getAll();
}
	
	//GET BY ID	
	@RequestMapping(value="/{id}",
					method=RequestMethod.GET, 
					produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Book> findById(@PathVariable int id) {
		Book u = service.getById(id);
		
		if(u == null) {
			//return not found status
			return new ResponseEntity<Book>(HttpStatus.I_AM_A_TEAPOT);
		}
		else {
			//return ok status
			return new ResponseEntity<Book>(u, HttpStatus.OK);
		}
	}
	
	//CREATE
	@RequestMapping(method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Book> addUser(@RequestBody Book u) {
		u = service.addBook(u);
		if(u == null) {
			return new ResponseEntity<Book>(HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<Book>(u, HttpStatus.CREATED);
		}
	}
	
	//UPDATE 
	@RequestMapping(value="/{id}",
			method=RequestMethod.PUT,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Book> updateUser(@PathVariable int id, @RequestBody Book u){
		Book book = service.updateBook(id, u);
		if(book == null) {
			return new ResponseEntity<Book>(HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<Book>(book, HttpStatus.OK);
		}
		
	}
	
	
	
	
	
	
	
	

}
