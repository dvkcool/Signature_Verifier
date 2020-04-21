# Signature_Verifier
A .Net Project made for course work

It contains the web application made in .Net for verifying signature. 

The ``Frontend`` folder contains the .Net part which is used for front end deployment.
The ``Backend`` folder contains the Machine learning model.

## Demo
An application for Android showing some of the front-end interface is as follows:

1. Welcome Screen
_____________________
 ![Welcome_Screen](https://github.com/dvkcool/Signature_Verifier/blob/master/res/Front_page_2.png?raw=true)
 _____________________
 2. About us:
______________________
 ![About us](https://github.com/dvkcool/Signature_Verifier/blob/master/res/aboutus.png?raw=true)
___________________
3. Testing:
______________________
![testing]()
___________________
4. Training:
______________________
![training]()
___________________



## Signatrue Verification Model
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

## Requirements
+ Python 3.6
+ Opencv 3.2
+ Numpy
+ .Net Core 3.1
+ Visual Studio / VSCode
+ .Net Cli (dotnet)

## Usage

### Machine learning model
```python sigrecog.py```  to run the implementation of Backpropagation neural network

### .Net frontend
```sh
# Cd into front end folder
$ cd frontend
# Doing a restore
$ dotnet restore
# Running the project
$ dotnet run
```

Navigate to http://localhost:5000 to view the page

Happy Coding



