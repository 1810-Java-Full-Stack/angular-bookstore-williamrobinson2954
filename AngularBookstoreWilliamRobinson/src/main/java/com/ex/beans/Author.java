package com.ex.beans;

import org.springframework.stereotype.Component;

@Component
public class Author {
	
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	@Override
	public String toString() {
		return "Author [name=" + name + "]";
	}
	
}
