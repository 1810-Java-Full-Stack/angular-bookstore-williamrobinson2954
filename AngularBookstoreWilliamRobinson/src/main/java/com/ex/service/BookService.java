package com.ex.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ex.beans.Book;

@Service("BookService")
public class BookService {

	//where we would autowire our daos but this is a dummy service

	static ArrayList<Book> books = new ArrayList<Book>();
	static int seq = 3;

	static {
		books.add(new Book(1, "gab12"));
		books.add(new Book(2, "test"));
	}

	public List<Book> getAll(){
		return books;
	}

	public Book getById(int id) {
		return books.stream().filter(t -> t.getId()==id).findFirst()
				.orElse(null);
	}

	public Book findByName(String name) {
		return books.stream().filter(t -> t.getName().
				equalsIgnoreCase(name)).findFirst().orElse(null);
	}

	public Book addBook(Book u) {
		Book test = findByName(u.getName());
		if(test==null) {
			u.setId(seq++);
			books.add(u);
			return u;
		}
		else {
			return null;
		}
	}
	
	private Book findByname(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	public Book updateBook(int id, Book u) {
		Book old = getById(id);
		if(old == null) {
			return addBook(u);
		}
		else {
			int index = 0;
			//weird work around to change in-memory store of users
			for(Book s : books) {
				if(s.getId() == id) {
					s.setId(u.getId());
					s.setName(u.getName()); //make sure username doesnt exist
					return s;
				}
			}
		}
		return null;
	}
	
	
}
