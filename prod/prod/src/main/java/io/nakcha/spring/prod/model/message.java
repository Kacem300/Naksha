package io.nakcha.spring.prod.model;

public class message {
    private String message;
    private String email;

    public message(String message,String email) {
        this.message = message;
        this.email=email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
