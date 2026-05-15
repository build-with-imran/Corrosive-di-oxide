// Consultations Data with Doctors and Hospital Information
export const CONSULTATION_TYPES = [
  "general physician consultation",
  "ortho consultation",
  "cardiologist consultation",
  "urologist consultation",
  "nephrologist consultation",
  "neurologist consultation",
  "dermatologist consultation",
  "gynecologist consultation",
  "pediatrician consultation",
  "psychiatrist consultation",
  "ent consultation",
  "ophthalmologist consultation"
];

export const HOSPITAL_INFO = {
  "Max Healthcare": {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    location: "Multiple Locations",
    phone: "+91-1234567890",
    rating: 4.8,
    totalReviews: 1250
  },
  "Fortis Healthcare": {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    location: "Multiple Locations",
    phone: "+91-1234567891",
    rating: 4.8,
    totalReviews: 1120
  },
  "Manipal Hospitals": {
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    location: "Multiple Locations",
    phone: "+91-1234567892",
    rating: 4.7,
    totalReviews: 980
  },
  "Religare Wellness Centre": {
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop",
    location: "Multiple Locations",
    phone: "+91-1234567893",
    rating: 4.6,
    totalReviews: 756
  },
  "Columbia Asia": {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    location: "Multiple Locations",
    phone: "+91-1234567894",
    rating: 4.7,
    totalReviews: 645
  },
  "Cloudnine Hospitals": {
    image: "https://images.unsplash.com/photo-1576091160623-112417cbf10e?q=80&w=2070&auto=format&fit=crop",
    location: "Multiple Locations",
    phone: "+91-1234567895",
    rating: 4.6,
    totalReviews: 834
  },
  "Spring Meadows Hospital": {
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop",
    location: "Multiple Locations",
    phone: "+91-1234567896",
    rating: 4.5,
    totalReviews: 512
  },
  "Omni Hospitals": {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    location: "Multiple Locations",
    phone: "+91-1234567897",
    rating: 4.5,
    totalReviews: 423
  }
};

export const HOSPITAL_DOCTORS = {
  "Max Healthcare": {
    "general physician consultation": [
      {
        id: "max-gp-001",
        name: "Dr. Rajesh Kumar",
        specialty: "General Physician",
        experience: "15 years",
        consultingFee: "Rs. 500",
        qualifications: "MBBS, MD Internal Medicine",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        rating: 4.8,
        reviews: 245
      },
      {
        id: "max-gp-002",
        name: "Dr. Priya Sharma",
        specialty: "General Physician",
        experience: "12 years",
        consultingFee: "Rs. 450",
        qualifications: "MBBS, MD General Medicine",
        availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
        rating: 4.7,
        reviews: 198
      }
    ],
    "ortho consultation": [
      {
        id: "max-ortho-001",
        name: "Dr. Vikram Singh",
        specialty: "Orthopedic Surgeon",
        experience: "18 years",
        consultingFee: "Rs. 700",
        qualifications: "MBBS, MS Orthopedics, Fellowship in Sports Medicine",
        availableDays: ["Tuesday", "Thursday", "Saturday"],
        rating: 4.9,
        reviews: 312
      }
    ],
    "cardiologist consultation": [
      {
        id: "max-card-001",
        name: "Dr. Arjun Mehta",
        specialty: "Cardiologist",
        experience: "20 years",
        consultingFee: "Rs. 800",
        qualifications: "MBBS, MD Cardiology, DM Cardiology",
        availableDays: ["Monday", "Wednesday", "Friday"],
        rating: 4.9,
        reviews: 428
      }
    ],
    "urologist consultation": [
      {
        id: "max-urol-001",
        name: "Dr. Suresh Kumar",
        specialty: "Urologist",
        experience: "16 years",
        consultingFee: "Rs. 650",
        qualifications: "MBBS, MS Urology",
        availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
        rating: 4.6,
        reviews: 167
      }
    ],
    "nephrologist consultation": [
      {
        id: "max-neph-001",
        name: "Dr. Anita Gupta",
        specialty: "Nephrologist",
        experience: "14 years",
        consultingFee: "Rs. 600",
        qualifications: "MBBS, MD Internal Medicine, DM Nephrology",
        availableDays: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
        rating: 4.7,
        reviews: 189
      }
    ],
    "neurologist consultation": [
      {
        id: "max-neuro-001",
        name: "Dr. Nikhil Patel",
        specialty: "Neurologist",
        experience: "17 years",
        consultingFee: "Rs. 750",
        qualifications: "MBBS, MD Neurology, DM Neurology",
        availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
        rating: 4.8,
        reviews: 276
      }
    ],
    "dermatologist consultation": [
      {
        id: "max-derm-001",
        name: "Dr. Kavya Nair",
        specialty: "Dermatologist",
        experience: "11 years",
        consultingFee: "Rs. 550",
        qualifications: "MBBS, MD Dermatology",
        availableDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
        rating: 4.7,
        reviews: 234
      }
    ]
  },
  "Fortis Healthcare": {
    "general physician consultation": [
      {
        id: "fortis-gp-001",
        name: "Dr. Manish Desai",
        specialty: "General Physician",
        experience: "16 years",
        consultingFee: "Rs. 550",
        qualifications: "MBBS, MD Internal Medicine",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
        rating: 4.8,
        reviews: 312
      }
    ],
    "cardiologist consultation": [
      {
        id: "fortis-card-001",
        name: "Dr. Rohit Verma",
        specialty: "Cardiologist",
        experience: "22 years",
        consultingFee: "Rs. 900",
        qualifications: "MBBS, MD Cardiology, DM Cardiology, Fellowship USA",
        availableDays: ["Monday", "Wednesday", "Friday"],
        rating: 4.9,
        reviews: 512
      }
    ],
    "ortho consultation": [
      {
        id: "fortis-ortho-001",
        name: "Dr. Aakash Gupta",
        specialty: "Orthopedic Surgeon",
        experience: "19 years",
        consultingFee: "Rs. 750",
        qualifications: "MBBS, MS Orthopedics, MCh Trauma",
        availableDays: ["Tuesday", "Thursday", "Saturday"],
        rating: 4.8,
        reviews: 289
      }
    ],
    "pediatrician consultation": [
      {
        id: "fortis-peds-001",
        name: "Dr. Neha Singh",
        specialty: "Pediatrician",
        experience: "13 years",
        consultingFee: "Rs. 500",
        qualifications: "MBBS, MD Pediatrics",
        availableDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
        rating: 4.7,
        reviews: 398
      }
    ]
  },
  "Manipal Hospitals": {
    "general physician consultation": [
      {
        id: "manipal-gp-001",
        name: "Dr. Sanjay Rao",
        specialty: "General Physician",
        experience: "14 years",
        consultingFee: "Rs. 480",
        qualifications: "MBBS, MD General Medicine",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        rating: 4.6,
        reviews: 267
      }
    ],
    "ortho consultation": [
      {
        id: "manipal-ortho-001",
        name: "Dr. Sandeep Kumar",
        specialty: "Orthopedic Surgeon",
        experience: "17 years",
        consultingFee: "Rs. 680",
        qualifications: "MBBS, MS Orthopedics, Fellowship",
        availableDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
        rating: 4.7,
        reviews: 224
      }
    ],
    "neurologist consultation": [
      {
        id: "manipal-neuro-001",
        name: "Dr. Pooja Verma",
        specialty: "Neurologist",
        experience: "15 years",
        consultingFee: "Rs. 700",
        qualifications: "MBBS, MD Neurology",
        availableDays: ["Monday", "Wednesday", "Friday"],
        rating: 4.6,
        reviews: 198
      }
    ],
    "gynecologist consultation": [
      {
        id: "manipal-gyne-001",
        name: "Dr. Swati Desai",
        specialty: "Gynecologist",
        experience: "16 years",
        consultingFee: "Rs. 600",
        qualifications: "MBBS, MS Obstetrics & Gynecology",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        rating: 4.8,
        reviews: 346
      }
    ]
  },
  "Religare Wellness Centre": {
    "general physician consultation": [
      {
        id: "religare-gp-001",
        name: "Dr. Ramakrishnan",
        specialty: "General Physician",
        experience: "13 years",
        consultingFee: "Rs. 450",
        qualifications: "MBBS, MD Internal Medicine",
        availableDays: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
        rating: 4.5,
        reviews: 189
      }
    ],
    "cardiologist consultation": [
      {
        id: "religare-card-001",
        name: "Dr. Kiran Kapoor",
        specialty: "Cardiologist",
        experience: "18 years",
        consultingFee: "Rs. 750",
        qualifications: "MBBS, MD Cardiology, DM Cardiology",
        availableDays: ["Tuesday", "Thursday", "Saturday"],
        rating: 4.7,
        reviews: 267
      }
    ],
    "ent consultation": [
      {
        id: "religare-ent-001",
        name: "Dr. Anand Iyer",
        specialty: "ENT Specialist",
        experience: "12 years",
        consultingFee: "Rs. 500",
        qualifications: "MBBS, MS ENT",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
        rating: 4.6,
        reviews: 145
      }
    ]
  },
  "Columbia Asia": {
    "general physician consultation": [
      {
        id: "columbia-gp-001",
        name: "Dr. Venkat Rao",
        specialty: "General Physician",
        experience: "15 years",
        consultingFee: "Rs. 520",
        qualifications: "MBBS, MD Internal Medicine",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        rating: 4.7,
        reviews: 278
      }
    ],
    "urologist consultation": [
      {
        id: "columbia-urol-001",
        name: "Dr. Harish Nambiar",
        specialty: "Urologist",
        experience: "14 years",
        consultingFee: "Rs. 620",
        qualifications: "MBBS, MS Urology",
        availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
        rating: 4.6,
        reviews: 154
      }
    ],
    "ophthalmologist consultation": [
      {
        id: "columbia-oph-001",
        name: "Dr. Lakshmi Naidu",
        specialty: "Ophthalmologist",
        experience: "13 years",
        consultingFee: "Rs. 480",
        qualifications: "MBBS, MS Ophthalmology",
        availableDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
        rating: 4.7,
        reviews: 213
      }
    ]
  },
  "Cloudnine Hospitals": {
    "general physician consultation": [
      {
        id: "cloudnine-gp-001",
        name: "Dr. Mukesh Sharma",
        specialty: "General Physician",
        experience: "12 years",
        consultingFee: "Rs. 400",
        qualifications: "MBBS, MD General Medicine",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        rating: 4.4,
        reviews: 134
      }
    ],
    "gynecologist consultation": [
      {
        id: "cloudnine-gyne-001",
        name: "Dr. Divya Patel",
        specialty: "Gynecologist",
        experience: "14 years",
        consultingFee: "Rs. 550",
        qualifications: "MBBS, MS Obstetrics & Gynecology",
        availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
        rating: 4.6,
        reviews: 267
      }
    ],
    "pediatrician consultation": [
      {
        id: "cloudnine-peds-001",
        name: "Dr. Shreya Verma",
        specialty: "Pediatrician",
        experience: "11 years",
        consultingFee: "Rs. 450",
        qualifications: "MBBS, MD Pediatrics",
        availableDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
        rating: 4.5,
        reviews: 189
      }
    ]
  },
  "Spring Meadows Hospital": {
    "general physician consultation": [
      {
        id: "spring-gp-001",
        name: "Dr. Akshay Malhotra",
        specialty: "General Physician",
        experience: "11 years",
        consultingFee: "Rs. 420",
        qualifications: "MBBS, MD Internal Medicine",
        availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
        rating: 4.5,
        reviews: 112
      }
    ],
    "psychiatrist consultation": [
      {
        id: "spring-psych-001",
        name: "Dr. Sarah Khan",
        specialty: "Psychiatrist",
        experience: "14 years",
        consultingFee: "Rs. 600",
        qualifications: "MBBS, MD Psychiatry, CCBH",
        availableDays: ["Tuesday", "Thursday", "Saturday"],
        rating: 4.6,
        reviews: 128
      }
    ],
    "dermatologist consultation": [
      {
        id: "spring-derm-001",
        name: "Dr. Anjali Reddy",
        specialty: "Dermatologist",
        experience: "10 years",
        consultingFee: "Rs. 500",
        qualifications: "MBBS, MD Dermatology",
        availableDays: ["Monday", "Wednesday", "Friday"],
        rating: 4.5,
        reviews: 156
      }
    ]
  },
  "Omni Hospitals": {
    "general physician consultation": [
      {
        id: "omni-gp-001",
        name: "Dr. Ravi Mohan",
        specialty: "General Physician",
        experience: "10 years",
        consultingFee: "Rs. 380",
        qualifications: "MBBS, MD Internal Medicine",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        rating: 4.3,
        reviews: 98
      }
    ],
    "nephrologist consultation": [
      {
        id: "omni-neph-001",
        name: "Dr. Deepa Krishnan",
        specialty: "Nephrologist",
        experience: "12 years",
        consultingFee: "Rs. 550",
        qualifications: "MBBS, MD Internal Medicine, DM Nephrology",
        availableDays: ["Wednesday", "Friday", "Saturday"],
        rating: 4.5,
        reviews: 87
      }
    ]
  }
};

export const getConsultationsByHospital = (hospitalName) => {
  return HOSPITAL_DOCTORS[hospitalName] || {};
};

export const CONSULTATION_REVIEWS = {
  "general physician consultation": {
    "Max Healthcare": {
      rating: 4.8,
      totalReviews: 342,
      reviews: [
        { name: "Rajesh M.", text: "Dr. Rajesh was very thorough in his examination. He explained my health condition clearly and prescribed appropriate medicines. Highly satisfied!" },
        { name: "Simran K.", text: "Great consultation experience. The doctor listened to all my concerns and gave practical lifestyle advice along with medication." },
        { name: "Vikram P.", text: "Professional and compassionate approach. Dr. Priya spent enough time understanding my health issues. Would definitely recommend." }
      ]
    },
    "Fortis Healthcare": {
      rating: 4.7,
      totalReviews: 298,
      reviews: [
        { name: "Anil S.", text: "Dr. Manish's consultation was informative. He explained the blood test results well and gave clear instructions for follow-up." },
        { name: "Priya D.", text: "Excellent bedside manner and thorough health assessment. The clinic staff was also very helpful and courteous." },
        { name: "Harshita N.", text: "Very satisfied with the consultation. Dr. Desai asked relevant questions and provided holistic health guidance." }
      ]
    },
    "Manipal Hospitals": {
      rating: 4.6,
      totalReviews: 267,
      reviews: [
        { name: "Ravi K.", text: "Dr. Sanjay was attentive and asked detailed questions about my medical history. Great preventive health advice." },
        { name: "Neha M.", text: "Friendly doctor who made me feel comfortable. The consultation was well-structured and informative." },
        { name: "Suresh T.", text: "Appreciated the time Dr. Rao took to explain everything. Very professional and knowledgeable physician." }
      ]
    }
  },
  "cardiologist consultation": {
    "Fortis Healthcare": {
      rating: 4.9,
      totalReviews: 456,
      reviews: [
        { name: "Arjun V.", text: "Dr. Rohit is an exceptional cardiologist. He thoroughly reviewed my ECG and echo reports. Very reassuring consultation." },
        { name: "Meera S.", text: "Highly experienced doctor. He answered all my heart-related concerns with detailed medical explanations. Excellent consultation!" },
        { name: "Deepak R.", text: "Outstanding expertise in cardiology. Dr. Verma provided comprehensive cardiac risk assessment and prevention strategies." }
      ]
    },
    "Max Healthcare": {
      rating: 4.8,
      totalReviews: 389,
      reviews: [
        { name: "Sharma P.", text: "Dr. Arjun provided detailed cardiac evaluation. He explained my blood pressure management very clearly." },
        { name: "Lata G.", text: "Excellent cardiologist with great communication skills. Gave personalized advice for heart health and diet." },
        { name: "Hemant J.", text: "Very satisfied with the cardiac consultation. Dr. Mehta prescribed medications with clear follow-up plan." }
      ]
    },
    "Religare Wellness Centre": {
      rating: 4.7,
      totalReviews: 234,
      reviews: [
        { name: "Anjali R.", text: "Dr. Kiran was very patient and answered all my cardiac questions. Comprehensive consultation with practical advice." },
        { name: "Mohit K.", text: "Great experience with cardiac consultation. Dr. Kapoor explained the importance of cardiac screening well." },
        { name: "Sneha M.", text: "Thorough heart health assessment. Doctor provided exercise and diet recommendations tailored to my condition." }
      ]
    }
  },
  "ortho consultation": {
    "Max Healthcare": {
      rating: 4.9,
      totalReviews: 378,
      reviews: [
        { name: "Arun T.", text: "Dr. Vikram is an excellent orthopedic surgeon. He diagnosed my knee issue accurately and suggested effective treatment." },
        { name: "Priya N.", text: "Outstanding orthopedic care. Dr. Singh explained the sports injury treatment plan with detailed physical therapy guidance." },
        { name: "Rajesh K.", text: "Very impressed with Dr. Vikram's expertise. He provided non-surgical treatment options and expected recovery timeline." }
      ]
    },
    "Fortis Healthcare": {
      rating: 4.8,
      totalReviews: 312,
      reviews: [
        { name: "Vivek S.", text: "Dr. Aakash was very helpful with my spine issue. He explained the treatment options clearly and answered all questions." },
        { name: "Neha D.", text: "Professional orthopedic consultation. Dr. Gupta recommended appropriate physiotherapy along with medication." },
        { name: "Anuj M.", text: "Excellent trauma specialist. Dr. Aakash provided comprehensive shoulder injury assessment and recovery plan." }
      ]
    },
    "Manipal Hospitals": {
      rating: 4.7,
      totalReviews: 289,
      reviews: [
        { name: "Suresh K.", text: "Dr. Sandeep gave excellent bone health advice. He thoroughly examined my joint pain and provided practical solutions." },
        { name: "Kavya P.", text: "Very satisfied with orthopedic consultation. Doctor recommended minimally invasive treatment options." },
        { name: "Harish N.", text: "Great experience with Dr. Kumar. He explained the fracture healing process and rehabilitation protocol clearly." }
      ]
    }
  },
  "urologist consultation": {
    "Max Healthcare": {
      rating: 4.7,
      totalReviews: 245,
      reviews: [
        { name: "Rahul M.", text: "Dr. Suresh was professional and discrete. He addressed my urological concern with proper diagnosis and treatment plan." },
        { name: "Sanjay T.", text: "Very thorough urologist. Dr. Kumar explained the diagnostic procedure and provided reliable health advice." },
        { name: "Vikram R.", text: "Excellent consultation experience. Dr. Suresh was supportive and explained kidney stone treatment options clearly." }
      ]
    },
    "Columbia Asia": {
      rating: 4.6,
      totalReviews: 198,
      reviews: [
        { name: "Arjun S.", text: "Dr. Harish provided expert urological advice. He conducted thorough examination and prescribed appropriate treatment." },
        { name: "Prakash N.", text: "Very satisfied with urological consultation. Doctor explained urinary tract infection management well." },
        { name: "Rohit K.", text: "Professional and confidential service. Dr. Nambiar provided detailed follow-up instructions." }
      ]
    }
  },
  "nephrologist consultation": {
    "Max Healthcare": {
      rating: 4.7,
      totalReviews: 267,
      reviews: [
        { name: "Meera K.", text: "Dr. Anita provided comprehensive kidney health assessment. She explained my kidney function reports in detail." },
        { name: "Ramesh S.", text: "Excellent nephrologist with great patient communication. Dr. Gupta gave dietary and lifestyle recommendations." },
        { name: "Priya M.", text: "Very thorough kidney disease consultation. Doctor explained the importance of regular monitoring." }
      ]
    },
    "Omni Hospitals": {
      rating: 4.5,
      totalReviews: 156,
      reviews: [
        { name: "Rajesh N.", text: "Dr. Deepa was very attentive to kidney health concerns. She provided comprehensive management plan for my condition." },
        { name: "Sunita R.", text: "Good nephrology consultation. Doctor explained medications and dietary restrictions clearly." },
        { name: "Amar K.", text: "Dr. Krishnan provided practical kidney disease management advice and regular follow-up schedule." }
      ]
    }
  },
  "neurologist consultation": {
    "Max Healthcare": {
      rating: 4.8,
      totalReviews: 334,
      reviews: [
        { name: "Anil K.", text: "Dr. Nikhil is an excellent neurologist. He did thorough neurological examination and explained my headache trigger points." },
        { name: "Divya S.", text: "Outstanding neurology consultation. Dr. Patel provided effective migraine management strategy." },
        { name: "Suresh M.", text: "Very impressed with neurological assessment. Doctor recommended appropriate tests and medications." }
      ]
    },
    "Manipal Hospitals": {
      rating: 4.6,
      totalReviews: 278,
      reviews: [
        { name: "Ramesh T.", text: "Dr. Pooja was very understanding about my neurological symptoms. She explained the treatment plan clearly." },
        { name: "Neha K.", text: "Good neurology consultation with detailed examination. Doctor provided practical epilepsy management advice." },
        { name: "Vikram R.", text: "Professional neurologist with excellent diagnostic skills. Dr. Verma explained test results comprehensively." }
      ]
    }
  },
  "dermatologist consultation": {
    "Max Healthcare": {
      rating: 4.7,
      totalReviews: 289,
      reviews: [
        { name: "Shreya M.", text: "Dr. Kavya was very helpful with my skin issues. She provided effective acne treatment and skincare routine." },
        { name: "Priya N.", text: "Excellent dermatological consultation. Dr. Nair recommended suitable skincare products and lifestyle changes." },
        { name: "Ananya K.", text: "Very satisfied with skin treatment plan. Doctor explained the dermatological condition and provided clear instructions." }
      ]
    },
    "Spring Meadows Hospital": {
      rating: 4.5,
      totalReviews: 212,
      reviews: [
        { name: "Riya S.", text: "Dr. Anjali provided comprehensive skin assessment. She suggested both medical and cosmetic skincare solutions." },
        { name: "Meera P.", text: "Good dermatology consultation with personalized treatment. Doctor recommended appropriate skin products." },
        { name: "Kavya R.", text: "Helpful dermatologist who explained various skin treatment options. Very patient and professional." }
      ]
    }
  },
  "gynecologist consultation": {
    "Manipal Hospitals": {
      rating: 4.8,
      totalReviews: 398,
      reviews: [
        { name: "Pooja M.", text: "Dr. Swati was very compassionate and thorough. She addressed all my gynecological concerns professionally." },
        { name: "Anjali K.", text: "Excellent women's health consultation. Dr. Desai provided comprehensive pregnancy-related advice." },
        { name: "Sneha N.", text: "Very satisfied with gynecological care. Doctor explained reproductive health management clearly." }
      ]
    },
    "Cloudnine Hospitals": {
      rating: 4.6,
      totalReviews: 312,
      reviews: [
        { name: "Priya S.", text: "Dr. Divya was very supportive during consultation. She provided personalized gynecological care plan." },
        { name: "Neha M.", text: "Excellent women's health service. Doctor explained various contraception and family planning options." },
        { name: "Kavya P.", text: "Professional gynecologist with great patient empathy. Dr. Patel was very helpful with women's health issues." }
      ]
    }
  },
  "pediatrician consultation": {
    "Fortis Healthcare": {
      rating: 4.7,
      totalReviews: 356,
      reviews: [
        { name: "Rohit M.", text: "Dr. Neha was excellent with my child. She answered all parenting questions and gave age-appropriate health advice." },
        { name: "Priya K.", text: "Great pediatric consultation. Dr. Singh was very patient with my toddler and explained vaccination schedule." },
        { name: "Arun S.", text: "Outstanding child healthcare. Doctor provided comprehensive developmental milestones checklist." }
      ]
    },
    "Cloudnine Hospitals": {
      rating: 4.5,
      totalReviews: 278,
      reviews: [
        { name: "Meera N.", text: "Dr. Shreya was very warm with my baby. She provided detailed feeding and growth guidance." },
        { name: "Sunita M.", text: "Good pediatric consultation with practical child health advice. Doctor explained infant nutrition well." },
        { name: "Priya T.", text: "Helpful pediatrician who addressed all my child-related health concerns. Very professional service." }
      ]
    }
  },
  "psychiatrist consultation": {
    "Spring Meadows Hospital": {
      rating: 4.6,
      totalReviews: 234,
      reviews: [
        { name: "Anil M.", text: "Dr. Sarah was very professional and empathetic. She helped me understand my mental health condition better." },
        { name: "Priya K.", text: "Excellent psychiatric consultation. Dr. Khan provided practical coping strategies and medication guidance." },
        { name: "Rajesh N.", text: "Very satisfied with mental health support. Doctor addressed anxiety concerns with comprehensive treatment plan." }
      ]
    }
  },
  "ent consultation": {
    "Religare Wellness Centre": {
      rating: 4.6,
      totalReviews: 198,
      reviews: [
        { name: "Vikram S.", text: "Dr. Anand was very skilled at ear examination. He diagnosed my ear infection accurately and prescribed effective treatment." },
        { name: "Shreya M.", text: "Excellent ENT consultation. Doctor explained throat inflammation management and provided relief solutions." },
        { name: "Rohit K.", text: "Professional ear specialist with good bedside manner. Dr. Iyer addressed my hearing concerns comprehensively." }
      ]
    }
  },
  "ophthalmologist consultation": {
    "Columbia Asia": {
      rating: 4.7,
      totalReviews: 267,
      reviews: [
        { name: "Meera K.", text: "Dr. Lakshmi did thorough eye examination. She prescribed accurate spectacle power with detailed eye care advice." },
        { name: "Arun M.", text: "Excellent eye doctor. Dr. Naidu explained common eye problems and suggested preventive measures." },
        { name: "Priya S.", text: "Professional ophthalmologist with modern equipment. Doctor provided comprehensive vision assessment." }
      ]
    }
  }
};

export const getConsultationReviews = (consultationType, hospitalName) => {
  const typeReviews = CONSULTATION_REVIEWS[consultationType];
  if (!typeReviews) return null;
  return typeReviews[hospitalName] || null;
};

export const getAllDoctorsByConsultationType = (consultationType) => {
  const doctors = [];
  Object.keys(HOSPITAL_DOCTORS).forEach(hospital => {
    const hospitalDoctors = HOSPITAL_DOCTORS[hospital][consultationType];
    if (hospitalDoctors) {
      hospitalDoctors.forEach(doctor => {
        doctors.push({
          ...doctor,
          hospital: hospital
        });
      });
    }
  });
  return doctors;
};

export const getDoctorDetails = (hospitalName, consultationType, doctorId) => {
  const hospital = HOSPITAL_DOCTORS[hospitalName];
  if (!hospital || !hospital[consultationType]) return null;
  
  return hospital[consultationType].find(doc => doc.id === doctorId);
};

export const CONSULTATION_ICONS = {
  "general physician consultation": "👨‍⚕️",
  "ortho consultation": "🦴",
  "cardiologist consultation": "❤️",
  "urologist consultation": "🔬",
  "nephrologist consultation": "🩺",
  "neurologist consultation": "🧠",
  "dermatologist consultation": "💊",
  "gynecologist consultation": "🤰",
  "pediatrician consultation": "👶",
  "psychiatrist consultation": "🧘",
  "ent consultation": "👂",
  "ophthalmologist consultation": "👁️"
};
