# Ledge-vision-model

version 0.3 - June 2026

Author: **Souleymane**

# Overview

![overview](images/SCR-20260604-bkzq.jpeg)

edge-vision-model is an ongoing computer vision project focused on the development and deployment of a Convolutional Neural Network (CNN) on a resource-constrained microcontroller.

The objective is to designed an end-to-end embedded vision pipeline capable of performing image classification in real time while respecting memory, computation and power constraints imposed by embedded hardware.

The project covers the complete tiny machine learning workflow :

- Dataset acquisition and preparation using an OV2640 Cam and EESP-32 board CAM
- CNN architecture design
- Model training and validation
- Model optimization and quantization
- Deployment on microcontroller hardware (ESP32-S3)
- Real-time inference and performance evaluation


---

# Project Goals

The primary objectives are:

- Building our own image dataset
- Training a CNN model for image classification
- optimizig the model for embedded execution
- Deploy the model using TensorFlow Lite for Microcontrollers
- Evaluate accuracy, latency and memory usage on target hardware


---

# Current Status

| Task                 | Status        |
|----------------------|---------------|
| Problem Definition   | Completed     |
| Dataset Collection   | Completed     |
| Dataset Cleaning     | Completed     |
| Dataset Annotation   | Completed     |
| Data Augmentation    | In Progress   |
| CNN Training         | In Progress   |
| Model Optimization   | Planned       |
| Quantization         | Planned       |
| Embedded Deployment  | Planned       |
| Real-Time Testing    | Planned       |

# Dataset

The image dataset and flow alignments can be obtained at the [ Hugging Face repository ](https://huggingface.co/datasets/suuley/edge-vision-model)

The current dataset contains:

- 1260 images
- Multiple data aquisition process
- Validation substets

![dataset](images/dataset.jpg)

# System architecture 

- Image Acquisition
- Dataset Preparation
- Data augmentation
- CNN training
- Validation
- Model Quantization
- TensorFlow Lite Micro
- Microcontrolller deployment
- Real-Time Inference

# Technologies

**Machine Learning**

- Python
- TensorFlow
- Keras
- NumPy
- Matplotlib

**Embedded Systems**

- TensorFlow Lite Micro
- C/C++

**Development Tools**

- Git
- GitHub
- Jupyter Notebook

---

# Roadmap

## Version 0.4

- Complete data processing
- Train baseline CNN model
- Generate first performance benchmarks

## Version 0.5

- Hyperparameter optimization
- Data augmentation experiments
- Model compression

## Version 0.8

- TensorFlow Lite conversion
- Quantization-aware optimization

## Version 1.0

- Deployment on microcontroller
- Real-time validation
- Final benchmark report

---

# License

This project is released for educational and research purposes


