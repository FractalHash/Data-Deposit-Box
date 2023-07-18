/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_conditions').del()
  await knex('conditions').del()
  await knex('questions').del()
  await knex('users').del()
  await knex('users').insert([
    {
      "email": "johndoe@example.com",
      "username": "johndoe",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "janedoe@example.com",
      "username": "janedoe",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "mikesmith@example.com",
      "username": "mikesmith",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "sarahbrown@example.com",
      "username": "sarahbrown",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "davidwilson@example.com",
      "username": "davidwilson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "emilyjones@example.com",
      "username": "emilyjones",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "alexthomas@example.com",
      "username": "alexthomas",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "laurasmith@example.com",
      "username": "laurasmith",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "matthewjohnson@example.com",
      "username": "matthewjohnson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "amandawilliams@example.com",
      "username": "amandawilliams",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "danieljackson@example.com",
      "username": "danieljackson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "olivialopez@example.com",
      "username": "olivialopez",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "williammartin@example.com",
      "username": "williammartin",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "sophiathompson@example.com",
      "username": "sophiathompson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "michaelsmith@example.com",
      "username": "michaelsmith",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "emilydavis@example.com",
      "username": "emilydavis",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "jacobjohnson@example.com",
      "username": "jacobjohnson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "hannahwhite@example.com",
      "username": "hannahwhite",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "christopherlee@example.com",
      "username": "christopherlee",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "samanthawilson@example.com",
      "username": "samanthawilson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "andrewjackson@example.com",
      "username": "andrewjackson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "oliviamiller@example.com",
      "username": "oliviamiller",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "jamesbrown@example.com",
      "username": "jamesbrown",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "madisonthomas@example.com",
      "username": "madisonthomas",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "ethanrodriguez@example.com",
      "username": "ethanrodriguez",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "sophiasmith@example.com",
      "username": "sophiasmith",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "liamrodriguez@example.com",
      "username": "liamrodriguez",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "avaadams@example.com",
      "username": "avaadams",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "noahwright@example.com",
      "username": "noahwright",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "isabellagarcia@example.com",
      "username": "isabellagarcia",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "masonwilson@example.com",
      "username": "masonwilson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "gracewalker@example.com",
      "username": "gracewalker",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "aidenbrown@example.com",
      "username": "aidenbrown",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "charlottehill@example.com",
      "username": "charlottehill",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "logansmith@example.com",
      "username": "logansmith",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "zoelee@example.com",
      "username": "zoelee",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "lucasgonzalez@example.com",
      "username": "lucasgonzalez",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "penelopeross@example.com",
      "username": "penelopeross",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "danielgreen@example.com",
      "username": "danielgreen",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "nataliecollins@example.com",
      "username": "nataliecollins",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "henrysmith@example.com",
      "username": "henrysmith",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "elliecooper@example.com",
      "username": "elliecooper",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "oliverbrown@example.com",
      "username": "oliverbrown",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "victoriaharris@example.com",
      "username": "victoriaharris",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "gabrieljones@example.com",
      "username": "gabrieljones",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "sofiaroberts@example.com",
      "username": "sofiaroberts",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "josephthomas@example.com",
      "username": "josephthomas",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "averydavis@example.com",
      "username": "averydavis",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "scarlettanderson@example.com",
      "username": "scarlettanderson",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "jacksullivan@example.com",
      "username": "jacksullivan",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "aubreyhernandez@example.com",
      "username": "aubreyhernandez",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "wyattlopez@example.com",
      "username": "wyattlopez",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    },
    {
      "email": "sophiacarter@example.com",
      "username": "sophiacarter",
      "hashedpass": "$2b$10$TdWefQ9wjwScuHxGRW/YUOfklYuYP./JYcgYMh1AVAklLnGZh/2Cm"
    }
  ]);
  await knex('questions').insert([
    {
      "question": "What is your favorite color?",
      "answer": "Blue",
      "user_id": 1
    },
    {
      "question": "What is your pet's name?",
      "answer": "Max",
      "user_id": 1
    },
    {
      "question": "What is your favorite hobby?",
      "answer": "Photography",
      "user_id": 1
    },
    {
      "question": "What is your preferred mode of transportation?",
      "answer": "Bicycle",
      "user_id": 1
    },
    {
      "question": "What is your favorite cuisine?",
      "answer": "Italian",
      "user_id": 1
    },
    {
      "question": "What is your dream vacation destination?",
      "answer": "Maldives",
      "user_id": 1
    },
    {
      "question": "What is your favorite book?",
      "answer": "Harry Potter",
      "user_id": 1
    },
    {
      "question": "What is your go-to exercise routine?",
      "answer": "Yoga",
      "user_id": 1
    },
    {
      "question": "What is your favorite season?",
      "answer": "Autumn",
      "user_id": 1
    },
    {
      "question": "What is your all-time favorite movie?",
      "answer": "The Shawshank Redemption",
      "user_id": 1
    },
    {
      "question": "What is your preferred method of relaxation?",
      "answer": "Meditation",
      "user_id": 1
    },
    {
      "question": "What is your favorite type of music?",
      "answer": "Rock",
      "user_id": 1
    },
    {
      "question": "What is your favorite outdoor activity?",
      "answer": "Hiking",
      "user_id": 1
    },
    {
      "question": "What is your favorite animal?",
      "answer": "Dolphin",
      "user_id": 1
    },
    {
      "question": "What is your preferred social media platform?",
      "answer": "Instagram",
      "user_id": 1
    },
    {
      "question": "What is your favorite dessert?",
      "answer": "Chocolate cake",
      "user_id": 1
    },
    {
      "question": "What is your preferred morning beverage?",
      "answer": "Coffee",
      "user_id": 1
    },
    {
      "question": "What is your favorite type of art?",
      "answer": "Painting",
      "user_id": 1
    },
    {
      "question": "What is your preferred method of learning?",
      "answer": "Online courses",
      "user_id": 1
    },
    {
      "question": "What is your favorite sport?",
      "answer": "Tennis",
      "user_id": 1
    }
  ]);
  await knex('conditions').insert([
    {
      "name": "Hypertension"
    },
    {
      "name": "Diabetes"
    },
    {
      "name": "Asthma"
    },
    {
      "name": "Arthritis"
    },
    {
      "name": "Cancer"
    },
    {
      "name": "Depression"
    },
    {
      "name": "Anxiety"
    },
    {
      "name": "Obesity"
    },
    {
      "name": "Alzheimer's disease"
    },
    {
      "name": "Parkinson's disease"
    },
    {
      "name": "Epilepsy"
    },
    {
      "name": "Multiple sclerosis"
    },
    {
      "name": "Heart disease"
    },
    {
      "name": "Stroke"
    },
    {
      "name": "Chronic obstructive pulmonary disease (COPD)"
    },
    {
      "name": "Rheumatoid arthritis"
    },
    {
      "name": "Osteoporosis"
    },
    {
      "name": "HIV/AIDS"
    },
    {
      "name": "Migraine"
    },
    {
      "name": "Fibromyalgia"
    },
    {
      "name": "Autism spectrum disorder"
    },
    {
      "name": "Schizophrenia"
    },
    {
      "name": "Bipolar disorder"
    },
    {
      "name": "Attention deficit hyperactivity disorder (ADHD)"
    },
    {
      "name": "Endometriosis"
    },
    {
      "name": "Gastroesophageal reflux disease (GERD)"
    },
    {
      "name": "Chronic kidney disease"
    },
    {
      "name": "Hepatitis"
    },
    {
      "name": "Thyroid disorders"
    },
    {
      "name": "Irritable bowel syndrome (IBS)"
    },
    {
      "name": "Crohn's disease"
    },
    {
      "name": "Ulcerative colitis"
    },
    {
      "name": "Lupus"
    },
    {
      "name": "Psoriasis"
    },
    {
      "name": "Eczema"
    },
    {
      "name": "Allergies"
    },
    {
      "name": "Sleep apnea"
    },
    {
      "name": "Ovarian cancer"
    },
    {
      "name": "Breast cancer"
    },
    {
      "name": "Prostate cancer"
    },
    {
      "name": "Colon cancer"
    },
    {
      "name": "Pancreatic cancer"
    },
    {
      "name": "Lung cancer"
    },
    {
      "name": "Leukemia"
    },
    {
      "name": "Melanoma"
    },
    {
      "name": "Osteoarthritis"
    },
    {
      "name": "Cataracts"
    },
    {
      "name": "Glaucoma"
    },
    {
      "name": "Macular degeneration"
    }
  ]);
  await knex('user_conditions').insert([
    { user_id: 1, condition_id: 32 },
    { user_id: 1, condition_id: 18 },
    { user_id: 1, condition_id: 48 },
    { user_id: 1, condition_id: 28 },
    { user_id: 1, condition_id: 13 },
    { user_id: 1, condition_id: 8 },
  ]);
};
