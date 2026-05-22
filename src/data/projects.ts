export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Computer Vision' | 'Deep Learning' | 'Machine Learning';
  tags: string[];
  coverImage: string;
  heroImage: string;
  problem: string;
  role: string;
  githubUrl: string;
  demoUrl?: string;
  year: string;
  context: string;
}

export const projects: Project[] = [
  {
    id: 'license-plate-recognition',
    title: 'Automated License Plate Recognition (ALPR)',
    shortDescription: 'End-to-end YOLO-based pipeline for vehicle license plate detection and OCR text extraction.',
    category: 'Computer Vision',
    tags: ['Python', 'YOLO', 'OpenCV', 'PyTorch', 'OCR', 'Deep Learning'],
    coverImage: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1600',
    problem: 'Traffic monitoring, parking management, and law enforcement all depend on accurately reading vehicle license plates in varied real-world conditions: different lighting, angles, motion blur, and plate formats. Manual processes are impractical at scale. This graduation project delivers an end-to-end automated pipeline capable of detecting plates in images or video and extracting the alphanumeric text reliably.',
    role: 'Developed a Computer Vision module using deep learning and OpenCV for vehicle license plate detection and text extraction. Applied image preprocessing techniques (resizing, cropping, grayscale conversion, noise reduction) to improve detection reliability. Implemented object detection and OCR to accurately read license plate characters from live video streams. Integrated the vision module into a broader traffic management system in collaboration with a cross-functional team.',
    githubUrl: 'https://github.com/abdalrhman2023/Egyptian-License-Plate-Recognition-System',
    year: '2024-2025',
    context: 'Graduation Project (Oct 2024 - Present)',
  },
  {
    id: 'heart-disease-prediction',
    title: 'Heart Disease Prediction App',
    shortDescription: 'Machine learning web application for predicting heart disease risk using patient health data.',
    category: 'Machine Learning',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'ML', 'Classification'],
    coverImage: '/heart-disease-cover.png',
    heroImage: '/heart-disease-cover.png',
    problem: 'Early detection of heart disease is critical for patient outcomes. Traditional diagnostic methods are time-consuming and require medical expertise. A data-driven approach can help identify high-risk patients based on clinical indicators like age, cholesterol, and blood pressure, enabling preventive care.',
    role: 'Built a Streamlit web application to predict heart disease risk using patient health data and clinical indicators. Trained and compared multiple Scikit-learn classification models (Logistic Regression, Random Forest, SVM), selecting the best-performing one for deployment. Designed an interactive UI enabling real-time predictions based on inputs such as age, cholesterol, and blood pressure. Model achieved 85%+ accuracy on test data.',
    githubUrl: 'https://github.com/abdalrhman2023/heart-disease-app',
    year: '2025',
    context: 'ML Web Application (Jan 2025)',
  },
  {
    id: 'plant-disease-classification',
    title: 'Plant Disease Classification',
    shortDescription: 'Deep learning CNN model using PyTorch and transfer learning for plant disease detection.',
    category: 'Deep Learning',
    tags: ['Python', 'PyTorch', 'CNN', 'ResNet-18', 'Transfer Learning', 'Computer Vision'],
    coverImage: 'https://images.pexels.com/photos/4397704/pexels-photo-4397704.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage: 'https://images.pexels.com/photos/4397704/pexels-photo-4397704.jpeg?auto=compress&cs=tinysrgb&w=1600',
    problem: 'Agricultural productivity is threatened by plant diseases that can devastate crops if not detected early. Manual inspection is time-consuming and requires expertise. An automated, visual identification system can help farmers detect and treat diseases faster.',
    role: 'Built a CNN image classification model using PyTorch and transfer learning (ResNet-18 backbone) for plant disease detection. Applied data augmentation (rotations, flips, color jittering) and preprocessing pipelines to improve generalization on the New Plant Diseases dataset. Evaluated model performance using accuracy, precision, recall, and confusion matrix visualizations. Achieved 92% classification accuracy across disease categories.',
    githubUrl: 'https://github.com/abdalrhman2023',
    year: '2025',
    context: 'Deep Learning Project (May 2025)',
  },
  {
    id: 'ppe-detection-yolo',
    title: 'PPE Detection with YOLO',
    shortDescription: 'Real-time Personal Protective Equipment detection system using YOLO for workplace safety monitoring.',
    category: 'Computer Vision',
    tags: ['Python', 'YOLO', 'OpenCV', 'Deep Learning', 'Object Detection', 'Computer Vision'],
    coverImage: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1600',
    problem: 'Workplace safety is a critical concern across construction sites, factories, and industrial environments. Ensuring that workers wear proper Personal Protective Equipment (PPE) such as helmets, vests, and gloves is essential to prevent injuries and comply with safety regulations. Manual monitoring is impractical, inconsistent, and cannot scale across large sites. An automated real-time detection system can continuously monitor compliance and alert supervisors instantly.',
    role: 'Developed the AI and Computer Vision module of the project, implementing a YOLO-based object detection pipeline for real-time PPE detection. Trained and fine-tuned the YOLO model on annotated datasets of workers with and without protective equipment. Built preprocessing and inference pipelines using OpenCV for handling video streams and image inputs. Optimized detection accuracy for various PPE classes including helmets, safety vests, and gloves.',
    githubUrl: 'https://github.com/abdalrhman2023/PPE-Detection-YOLO',
    year: '2025',
    context: 'Computer Vision Project (2025)',
  },
];

export const categories = ['All', 'Computer Vision', 'Deep Learning', 'Machine Learning'] as const;
export type Category = typeof categories[number];
