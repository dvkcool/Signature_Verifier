# Signature_Verifier
A .Net Project made for course work

# Signatrue Verification Model
The model is being trained using the genuine and fake signatures of different persons, For this method, the processes involved are as follows:

<h3>1. Data Acquisition</h3>
The dataset used has been taken from the ICDAR 2009 Signature Verification Competition (SigComp2009).

<h3>2. Preprocessing</h3>
The preprocessing has been done using the <b>opencv</b> module, where the images of the signatures are being flattened and cropped to 
appropriate dimensions so as to aid in the process of classification

<h3>3. Backpropagation Algorithm</h3>
Backpropagation algorithm has been used to train the Neural Network model. The model consists of 4 layers having number of nodes
as follows :-

+ 1st layer = 901 nodes
+ 2nd layer = 500 nodes
+ 3rd layer = 500 nodes
+ 4th layer = 2 nodes

# Requirements
+ Python 3.6
+ Opencv 3.2
+ Numpy

# Usage
```python sigrecog.py```  to run the implementation of Backpropagation neural network



