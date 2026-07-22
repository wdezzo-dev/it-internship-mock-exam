import { Question } from '../types';

export const aiQuestions: Question[] = [
  {
    id: 'ai-1',
    question: 'What is Artificial Intelligence (AI)?',
    options: [
      'A robot',
      'The simulation of human intelligence by computer systems',
      'A programming language',
      'A database technology'
    ],
    correctAnswer: 1,
    explanation: 'AI is the simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction.'
  },
  {
    id: 'ai-2',
    question: 'What is Machine Learning (ML)?',
    options: [
      'Teaching machines to type',
      'A subset of AI where systems learn from data without being explicitly programmed',
      'A programming technique',
      'A hardware component'
    ],
    correctAnswer: 1,
    explanation: 'ML is a subset of AI focused on building systems that learn from data to improve their performance on tasks without explicit programming.'
  },
  {
    id: 'ai-3',
    question: 'What is the difference between supervised and unsupervised learning?',
    options: [
      'No difference',
      'Supervised uses labeled data; unsupervised finds patterns in unlabeled data',
      'Unsupervised uses labeled data',
      'Supervised doesn\'t use any data'
    ],
    correctAnswer: 1,
    explanation: 'Supervised learning trains on labeled data (input-output pairs). Unsupervised learning finds patterns in data without labels.'
  },
  {
    id: 'ai-4',
    question: 'What is a neural network?',
    options: [
      'A computer network',
      'A computing system inspired by biological neural networks with layers of connected nodes',
      'A social network',
      'A mesh network'
    ],
    correctAnswer: 1,
    explanation: 'A neural network is a computing system inspired by biological brains, consisting of layers of interconnected nodes (neurons).'
  },
  {
    id: 'ai-5',
    question: 'What is deep learning?',
    options: [
      'Learning deeply about a subject',
      'A subset of ML using neural networks with many layers to learn complex patterns',
      'Advanced programming',
      'Deep data analysis'
    ],
    correctAnswer: 1,
    explanation: 'Deep learning uses neural networks with many layers (deep networks) to learn hierarchical representations from large amounts of data.'
  },
  {
    id: 'ai-6',
    question: 'What is Natural Language Processing (NLP)?',
    options: [
      'Programming in natural language',
      'AI\'s ability to understand, interpret, and generate human language',
      'A natural programming language',
      'Language translation software'
    ],
    correctAnswer: 1,
    explanation: 'NLP is a branch of AI focused on the interaction between computers and human language, enabling machines to understand text and speech.'
  },
  {
    id: 'ai-7',
    question: 'What is a training dataset?',
    options: [
      'A fitness app dataset',
      'A labeled set of data used to teach a machine learning model',
      'A database backup',
      'A test environment'
    ],
    correctAnswer: 1,
    explanation: 'A training dataset is a set of data used to teach a ML model to recognize patterns and make predictions.'
  },
  {
    id: 'ai-8',
    question: 'What is overfitting in machine learning?',
    options: [
      'Using too much data',
      'When a model learns noise in training data and performs poorly on new data',
      'Running too many epochs',
      'Using too many features'
    ],
    correctAnswer: 1,
    explanation: 'Overfitting occurs when a model learns the training data too well, including noise, and fails to generalize to unseen data.'
  },
  {
    id: 'ai-9',
    question: 'What is underfitting?',
    options: [
      'Using too little data',
      'When a model is too simple to capture the underlying pattern in the data',
      'Not training long enough',
      'Having too few features'
    ],
    correctAnswer: 1,
    explanation: 'Underfitting occurs when a model is too simple to capture the underlying structure of the data, performing poorly on both training and test data.'
  },
  {
    id: 'ai-10',
    question: 'What is a classification problem in ML?',
    options: [
      'Organizing files',
      'Predicting a discrete category or class label for input data',
      'Sorting numbers',
      'Categorizing files'
    ],
    correctAnswer: 1,
    explanation: 'Classification predicts which category/class an input belongs to, such as spam detection or image recognition.'
  },
  {
    id: 'ai-11',
    question: 'What is a regression problem in ML?',
    options: [
      'Going backwards',
      'Predicting a continuous numerical value from input data',
      'A type of error',
      'Data cleanup'
    ],
    correctAnswer: 1,
    explanation: 'Regression predicts continuous numerical values, such as predicting house prices or stock values.'
  },
  {
    id: 'ai-12',
    question: 'What is a confusion matrix?',
    options: [
      'A matrix that confuses people',
      'A table showing true positives, false positives, true negatives, and false negatives',
      'A random data matrix',
      'An error log'
    ],
    correctAnswer: 1,
    explanation: 'A confusion matrix is a table that summarizes the performance of a classification model by showing TP, FP, TN, and FN.'
  },
  {
    id: 'ai-13',
    question: 'What is transfer learning?',
    options: [
      'Transferring data between systems',
      'Using a pre-trained model on a new but related task',
      'Moving models between servers',
      'Learning from multiple teachers'
    ],
    correctAnswer: 1,
    explanation: 'Transfer learning uses a model pre-trained on one task as a starting point for a different but related task, saving time and data.'
  },
  {
    id: 'ai-14',
    question: 'What is reinforcement learning?',
    options: [
      'Repetitive learning',
      'An agent learns by interacting with an environment and receiving rewards/penalties',
      'Strengthening neural networks',
      'Adding more training data'
    ],
    correctAnswer: 1,
    explanation: 'Reinforcement learning involves an agent learning to make decisions by receiving rewards or penalties for actions in an environment.'
  },
  {
    id: 'ai-15',
    question: 'What is a loss function?',
    options: [
      'A function that loses data',
      'A function that measures how far a model\'s predictions are from actual values',
      'A function for data loss prevention',
      'An error handling function'
    ],
    correctAnswer: 1,
    explanation: 'A loss function (cost function) quantifies how well or poorly a model\'s predictions match the actual target values.'
  },
  {
    id: 'ai-16',
    question: 'What is gradient descent?',
    options: [
      'A hiking technique',
      'An optimization algorithm that minimizes the loss function by iteratively adjusting parameters',
      'A data sorting method',
      'A graph traversal algorithm'
    ],
    correctAnswer: 1,
    explanation: 'Gradient descent is an optimization algorithm that iteratively adjusts model parameters to minimize the loss function.'
  },
  {
    id: 'ai-17',
    question: 'What is a CNN (Convolutional Neural Network)?',
    options: [
      'A news network',
      'A neural network designed for processing grid-like data such as images',
      'A cable network',
      'A cloud computing network'
    ],
    correctAnswer: 1,
    explanation: 'CNNs are specialized neural networks designed for processing structured grid data, particularly effective for image recognition.'
  },
  {
    id: 'ai-18',
    question: 'What is an RNN (Recurrent Neural Network)?',
    options: [
      'A repeated network',
      'A neural network designed for sequential data with memory of previous inputs',
      'A recursive algorithm',
      'A random network'
    ],
    correctAnswer: 1,
    explanation: 'RNNs process sequential data by maintaining a hidden state that captures information from previous time steps.'
  },
  {
    id: 'ai-19',
    question: 'What is a Transformer model?',
    options: [
      'A power transformer',
      'A neural network architecture using self-attention mechanisms for parallel processing',
      'A data transformer',
      'A file converter'
    ],
    correctAnswer: 1,
    explanation: 'Transformers use self-attention mechanisms to process all positions in a sequence simultaneously, forming the basis of models like GPT and BERT.'
  },
  {
    id: 'ai-20',
    question: 'What is GPT?',
    options: [
      'General Purpose Technology',
      'Generative Pre-trained Transformer - a large language model',
      'Graphical Processing Tool',
      'Global Processing Terminal'
    ],
    correctAnswer: 1,
    explanation: 'GPT (Generative Pre-trained Transformer) is a family of large language models that generate human-like text.'
  },
  {
    id: 'ai-21',
    question: 'What is data preprocessing?',
    options: [
      'Deleting data',
      'Cleaning, transforming, and organizing raw data before using it for ML',
      'Backing up data',
      'Printing data'
    ],
    correctAnswer: 1,
    explanation: 'Data preprocessing involves cleaning, transforming, normalizing, and organizing raw data to make it suitable for ML models.'
  },
  {
    id: 'ai-22',
    question: 'What is feature engineering?',
    options: [
      'Building features for software',
      'Creating and selecting relevant input variables from raw data for ML models',
      'Engineering new products',
      'Feature documentation'
    ],
    correctAnswer: 1,
    explanation: 'Feature engineering is the process of creating, selecting, and transforming variables (features) to improve ML model performance.'
  },
  {
    id: 'ai-23',
    question: 'What is cross-validation?',
    options: [
      'Validating across teams',
      'A technique that splits data into subsets to train and validate a model multiple times',
      'Cross-checking data',
      'Validating two models'
    ],
    correctAnswer: 1,
    explanation: 'Cross-validation divides data into k folds, training on k-1 folds and validating on the remaining fold, rotating through all folds.'
  },
  {
    id: 'ai-24',
    question: 'What is accuracy in ML?',
    options: [
      'How fast a model runs',
      'The percentage of correct predictions out of total predictions',
      'How much data is used',
      'The model\'s complexity'
    ],
    correctAnswer: 1,
    explanation: 'Accuracy is the ratio of correct predictions to total predictions, expressed as a percentage.'
  },
  {
    id: 'ai-25',
    question: 'What is precision in ML?',
    options: [
      'How detailed the model is',
      'The ratio of true positives to all predicted positives',
      'How fast predictions are made',
      'The number of features used'
    ],
    correctAnswer: 1,
    explanation: 'Precision measures the ratio of correctly predicted positive observations to total predicted positives (TP / (TP + FP)).'
  },
  {
    id: 'ai-26',
    question: 'What is recall (sensitivity) in ML?',
    options: [
      'Remembering past data',
      'The ratio of true positives to all actual positives',
      'Recalling model parameters',
      'Data retrieval speed'
    ],
    correctAnswer: 1,
    explanation: 'Recall measures the ratio of correctly predicted positive observations to all actual positives (TP / (TP + FN)).'
  },
  {
    id: 'ai-27',
    question: 'What is the F1 score?',
    options: [
      'A racing score',
      'The harmonic mean of precision and recall',
      'The first feature score',
      'A model speed metric'
    ],
    correctAnswer: 1,
    explanation: 'The F1 score is the harmonic mean of precision and recall, providing a single metric that balances both.'
  },
  {
    id: 'ai-28',
    question: 'What is a decision tree?',
    options: [
      'A flowchart for decisions',
      'A supervised learning algorithm that makes decisions by splitting data based on features',
      'A binary tree data structure',
      'An organization chart'
    ],
    correctAnswer: 1,
    explanation: 'A decision tree is a supervised learning algorithm that splits data based on feature values to make predictions, resembling a tree structure.'
  },
  {
    id: 'ai-29',
    question: 'What is a random forest?',
    options: [
      'A forest simulation',
      'An ensemble of decision trees that averages their predictions for better accuracy',
      'A random algorithm',
      'A data structure'
    ],
    correctAnswer: 1,
    explanation: 'Random forest is an ensemble method that builds multiple decision trees and merges their predictions for more accurate results.'
  },
  {
    id: 'ai-30',
    question: 'What is k-means clustering?',
    options: [
      'Averaging k values',
      'An unsupervised algorithm that groups data into k clusters based on similarity',
      'A sorting algorithm',
      'A search algorithm'
    ],
    correctAnswer: 1,
    explanation: 'K-means is an unsupervised algorithm that partitions data into k clusters, where each data point belongs to the nearest cluster center.'
  },
  {
    id: 'ai-31',
    question: 'What is TensorFlow?',
    options: [
      'A data flow diagram',
      'An open-source ML framework by Google for building and training neural networks',
      'A tensor calculator',
      'A flow control tool'
    ],
    correctAnswer: 1,
    explanation: 'TensorFlow is Google\'s open-source framework for machine learning and deep learning, used for building and training neural networks.'
  },
  {
    id: 'ai-32',
    question: 'What is PyTorch?',
    options: [
      'A Python lighting library',
      'An open-source ML framework by Meta known for dynamic computation graphs',
      'A torchlight app',
      'A Python game engine'
    ],
    correctAnswer: 1,
    explanation: 'PyTorch is Meta\'s open-source ML framework known for its dynamic computation graphs and ease of use in research.'
  },
  {
    id: 'ai-33',
    question: 'What is a hyperparameter?',
    options: [
      'A very important parameter',
      'A parameter set before training that controls the learning process',
      'A parameter that changes during training',
      'The output of a model'
    ],
    correctAnswer: 1,
    explanation: 'Hyperparameters are parameters set before training (learning rate, batch size, epochs) that control how the model learns.'
  },
  {
    id: 'ai-34',
    question: 'What is batch normalization?',
    options: [
      'Processing data in batches',
      'A technique that normalizes layer inputs to stabilize and speed up training',
      'Sorting batches of data',
      'A data cleaning method'
    ],
    correctAnswer: 1,
    explanation: 'Batch normalization normalizes the inputs of each layer, reducing internal covariate shift and stabilizing training.'
  },
  {
    id: 'ai-35',
    question: 'What is an epoch in ML training?',
    options: [
      'A time period',
      'One complete pass through the entire training dataset',
      'A model version',
      'A type of error'
    ],
    correctAnswer: 1,
    explanation: 'An epoch is one complete pass through the entire training dataset during model training.'
  },
  {
    id: 'ai-36',
    question: 'What is data augmentation?',
    options: [
      'Adding more data storage',
      'Artificially increasing training data by creating modified versions of existing data',
      'Data compression',
      'Data encryption'
    ],
    correctAnswer: 1,
    explanation: 'Data augmentation creates modified versions of existing data (rotations, flips, crops) to increase training data diversity.'
  },
  {
    id: 'ai-37',
    question: 'What is the bias-variance tradeoff?',
    options: [
      'A political concept',
      'Balancing model simplicity (bias) vs. sensitivity to training data (variance)',
      'A data preprocessing step',
      'A hardware optimization'
    ],
    correctAnswer: 1,
    explanation: 'The bias-variance tradeoff balances underfitting (high bias) and overfitting (high variance) to achieve optimal model performance.'
  },
  {
    id: 'ai-38',
    question: 'What is regularization in ML?',
    options: [
      'Making code regular',
      'Adding a penalty term to prevent overfitting by discouraging complex models',
      'Regular testing',
      'Scheduling training'
    ],
    correctAnswer: 1,
    explanation: 'Regularization adds a penalty term to the loss function to prevent overfitting by discouraging overly complex models (L1, L2).'
  },
  {
    id: 'ai-39',
    question: 'What is an activation function?',
    options: [
      'A function that activates hardware',
      'A function that determines the output of a neural network node',
      'An initialization function',
      'A login function'
    ],
    correctAnswer: 1,
    explanation: 'An activation function determines the output of a neural network node, introducing non-linearity (ReLU, sigmoid, tanh).'
  },
  {
    id: 'ai-40',
    question: 'What is computer vision?',
    options: [
      'A monitor display',
      'AI enabling computers to interpret and understand visual information from images/videos',
      'A graphics card',
      'Screen resolution'
    ],
    correctAnswer: 1,
    explanation: 'Computer vision is a field of AI that enables computers to interpret and understand visual information from images and videos.'
  },
  {
    id: 'ai-41',
    question: 'What is sentiment analysis?',
    options: [
      'Emotional intelligence',
      'NLP technique that determines the emotional tone of text (positive, negative, neutral)',
      'Psychological analysis',
      'User feedback forms'
    ],
    correctAnswer: 1,
    explanation: 'Sentiment analysis uses NLP to identify and extract the emotional tone (positive, negative, neutral) from text data.'
  },
  {
    id: 'ai-42',
    question: 'What is a GAN (Generative Adversarial Network)?',
    options: [
      'A network security tool',
      'Two neural networks (generator and discriminator) competing to generate realistic data',
      'A general area network',
      'A gaming network'
    ],
    correctAnswer: 1,
    explanation: 'GANs consist of two networks: a generator that creates fake data and a discriminator that tries to distinguish real from fake.'
  },
  {
    id: 'ai-43',
    question: 'What is BERT?',
    options: [
      'A character name',
      'Bidirectional Encoder Representations from Transformers - a pre-trained NLP model',
      'A programming language',
      'A database'
    ],
    correctAnswer: 1,
    explanation: 'BERT is a pre-trained NLP model by Google that understands context from both directions (left and right) for better language understanding.'
  },
  {
    id: 'ai-44',
    question: 'What is the learning rate in ML?',
    options: [
      'How fast a student learns',
      'A hyperparameter controlling how much model weights are updated during training',
      'The speed of data processing',
      'The number of training examples'
    ],
    correctAnswer: 1,
    explanation: 'The learning rate is a hyperparameter that controls the step size for updating model weights during gradient descent optimization.'
  },
  {
    id: 'ai-45',
    question: 'What is dimensionality reduction?',
    options: [
      'Making data smaller in file size',
      'Reducing the number of features while preserving important information (PCA, t-SNE)',
      'Compressing images',
      'Deleting columns'
    ],
    correctAnswer: 1,
    explanation: 'Dimensionality reduction reduces the number of input features while preserving essential information, using techniques like PCA.'
  },
  {
    id: 'ai-46',
    question: 'What is prompt engineering?',
    options: [
      'Building command prompts',
      'Crafting effective inputs/instructions for AI language models to get desired outputs',
      'Programming chatbots',
      'Engineering software prompts'
    ],
    correctAnswer: 1,
    explanation: 'Prompt engineering involves designing and optimizing input prompts to effectively guide AI language models to produce desired outputs.'
  },
  {
    id: 'ai-47',
    question: 'What is RAG (Retrieval-Augmented Generation)?',
    options: [
      'A cleaning tool',
      'Combining retrieval of external knowledge with generation to produce more accurate AI responses',
      'Random answer generation',
      'A data format'
    ],
    correctAnswer: 1,
    explanation: 'RAG combines information retrieval with text generation, allowing AI models to access external knowledge for more accurate responses.'
  },
  {
    id: 'ai-48',
    question: 'What is model deployment?',
    options: [
      'Downloading a model',
      'Making a trained ML model available for use in production environments',
      'Training a model',
      'Documenting a model'
    ],
    correctAnswer: 1,
    explanation: 'Model deployment is the process of making a trained ML model available in a production environment for making real-time predictions.'
  },
  {
    id: 'ai-49',
    question: 'What is MLOps?',
    options: [
      'ML Operations only',
      'Practices combining ML, DevOps, and data engineering for reliable ML system deployment',
      'A ML framework',
      'A monitoring tool'
    ],
    correctAnswer: 1,
    explanation: 'MLOps combines ML, DevOps, and data engineering practices to deploy and maintain ML systems reliably and efficiently in production.'
  },
  {
    id: 'ai-50',
    question: 'What is ethical AI?',
    options: [
      'AI that follows laws',
      'Developing AI systems that are fair, transparent, accountable, and respect privacy',
      'AI without bugs',
      'Open-source AI'
    ],
    correctAnswer: 1,
    explanation: 'Ethical AI focuses on developing AI systems that are fair, unbiased, transparent, accountable, and respect user privacy and human rights.'
  }
];
