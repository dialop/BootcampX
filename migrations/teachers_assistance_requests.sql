-- teachers table 

CREATE TABLE teachers ( 
    id SERIAL PRIMARY KEY NOT NULL, 
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    start_date DATE,
    end_date DATE
);


-- assistance_requests table 


CREATE TABLE assistance_requests (
    id SERIAL PRIMARY KEY NOT NULL,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    teacher_id INTEGER REFERENCES teachers(id) ON DELETE CASCADE,
    created_at INTEGER REFERENCES assignments(id) ON DELETE CASCADE,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    student_feedback TEXT,
    teacher_feedback TEXT
);

