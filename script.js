const questions = [
["Transfer Learning",[
["A pretrained CNN is used on a small medical-image dataset. Which strategy is most appropriate when the source and target domains are similar?",["Train the entire network from scratch","Freeze the backbone and train a new classifier","Randomly initialize all convolution layers","Unfreeze all layers with a very high learning rate"],1,"With similar domains and little data, pretrained features transfer well; train a new classifier first."],
["During fine-tuning, why should early pretrained layers often remain frozen initially?",["They contain only random weights","They capture general low-level features that may transfer well","They cannot participate in backpropagation","They contain the classification labels"],1,"Early layers often learn broadly useful low-level features."],
["A model performs well on training images but poorly on unseen images. Which augmentation strategy is most likely to improve generalization?",["Duplicate all training images without changes","Apply label-preserving random transformations","Augment only the test set","Remove all training samples with different orientations"],1,"Label-preserving transformations increase training variation and support generalization."],
["Why can ViT require substantial pretraining data compared with a traditional CNN?",["ViT cannot use positional embeddings","ViT has weaker built-in spatial inductive biases","ViT cannot perform classification","ViT does not use trainable parameters"],1,"CNNs have built-in spatial assumptions; ViTs rely more on data to learn these patterns."],
["A pretrained network has 20 layers. You freeze layers 1–15 and train layers 16–20 plus a new classifier. This is:",["Feature extraction with all layers frozen","Partial fine-tuning","Training from scratch","Unsupervised clustering"],1,"Some pretrained layers are trainable, so this is partial fine-tuning."]]],
["Recurrent Neural Networks",[
["An RNN uses h(t) = tanh(Wx(t) + Uh(t−1)). Which parameter is shared across time steps?",["Only x(t)","W and U","Only h(t)","A separate U for every time step"],1,"The recurrent cell reuses its learned weight matrices W and U at each step."],
["In BPTT, the gradient across many time steps contains repeated products of:",["Vocabulary sizes","Activation derivatives and recurrent weight matrices","Only output labels","Learning rates only"],1,"Backpropagation through time repeatedly multiplies recurrent Jacobians, including activation derivatives and recurrent weights."],
["Suppose a gradient is multiplied by 0.2 at each of 6 successive steps. What is its resulting magnitude relative to the initial gradient?",["0.000064","0.0064","0.064","0.2"],0,"0.2⁶ = 0.000064."],
["Which statement about an unrolled RNN is correct?",["Each time step has independent learned parameters","Unrolling creates a different model at every time step","The same recurrent cell is represented across multiple time steps","Unrolling eliminates hidden states"],2,"Unrolling depicts repeated applications of the same recurrent cell."],
["Why can gradient clipping help but not directly solve vanishing gradients?",["It increases all gradients without limit","It limits excessively large gradients but cannot restore lost tiny gradients","It removes recurrent connections","It changes the input sequence length"],1,"Clipping limits exploding gradients; it does not recover gradients that have already shrunk." ]]],
["Gated Architectures",[
["In an LSTM, if the forget gate is approximately 1 and input gate approximately 0, what happens to the cell state?",["It is mostly preserved","It is completely erased","It is replaced by the candidate state","It becomes the output gate"],0,"The cell update is fₜ⊙cₜ₋₁ + iₜ⊙candidate; these gate values preserve old memory and add almost nothing."],
["Which LSTM gate combination controls adding new candidate information into the cell state?",["Forget gate and output gate","Input gate and candidate cell state","Output gate and reset gate","Reset gate and update gate"],1,"New content is scaled by the input gate before it is added to the cell state."],
["In a standard GRU equation h(t) = (1−z)h(t−1) + z h_candidate, what does z≈0 imply?",["Candidate state completely replaces previous state","Previous hidden state is mostly retained","Reset gate becomes zero","Cell state is deleted"],1,"When z is near zero, the coefficient on the previous state is near one."],
["Why can a Bidirectional RNN be unsuitable for online next-word prediction?",["It cannot use embeddings","Its backward direction requires future sequence information","It has no hidden state","It cannot process variable-length sequences"],1,"The backward direction needs future tokens that are unavailable in online prediction."],
["Which statement about LSTM and GRU is most accurate?",["GRU always performs better than LSTM","LSTM has a separate cell state; GRU does not","GRU has three gates and LSTM has two","Neither architecture uses gating"],1,"LSTM passes hidden and cell states; GRU uses a single hidden state."]]],
["Text Representation",[
["A corpus contains 100 documents. A term appears in 20 documents. Using unsmoothed natural-log IDF, what is its IDF?",["ln(5)","ln(20)","ln(100)","ln(0.2)"],0,"IDF = ln(N/DF) = ln(100/20) = ln(5)."],
["A term occurs 4 times in a document containing 20 words. Its DF is 5 in a corpus of 50 documents. Calculate TF-IDF using natural-log IDF.",["0.05 × ln(10)","0.2 × ln(10)","4 × ln(5)","0.2 × ln(5)"],1,"TF = 4/20 = 0.2; IDF = ln(50/5) = ln(10)."],
["Two documents contain exactly the same words but in different orders. What happens with standard count-based BoW?",["Their vectors must differ","Their vectors are identical","One vector becomes dense","Word order is automatically recovered"],1,"Count-based BoW ignores order, so the word counts produce identical vectors."],
["What is a major disadvantage of using a fixed vocabulary with word-level tokenization?",["It always captures sentence meaning","Unseen words may become out-of-vocabulary tokens","It eliminates sparse vectors","It guarantees zero unknown words"],1,"An unseen word is not represented in a fixed word-level vocabulary."],
["If a term appears in every document, what is its unsmoothed IDF value?",["1","N","0","Infinity"],2,"IDF = ln(N/N) = ln(1) = 0."]]],
["Word Embeddings",[
["In CBOW with a context window of two words on each side, how many context positions are available for an interior target word?",["1","2","4","5"],2,"There are two positions on each side: 2 + 2 = 4."],
["Which statement about Word2Vec negative sampling is correct?",["It trains a classifier to distinguish genuine context pairs from sampled negative pairs","It removes all rare words","It calculates TF-IDF","It makes embeddings one-hot vectors"],0,"Negative sampling trains the model to distinguish real target-context pairs from sampled negatives."],
["Why can FastText generate useful representations for rare or unseen words?",["It uses only whole-word IDs","It represents words using character n-grams","It removes all subword information","It uses only document frequency"],1,"Character n-grams let FastText construct representations from subword pieces."],
["The words ‘bank’ in ‘river bank’ and ‘bank account’ receive the same vector in standard Word2Vec. Why?",["Word2Vec is contextual","Word2Vec uses one static vector per vocabulary word","Word2Vec ignores vocabulary","Both sentences have identical syntax"],1,"Standard Word2Vec assigns one static vector to each vocabulary word."],
["Two vectors have cosine similarity close to 1. What does this indicate?",["They have opposite directions","They are nearly orthogonal","They point in nearly the same direction","They must have identical magnitudes"],2,"Cosine similarity near 1 indicates nearly aligned directions; magnitudes need not match."]]],
["Sequence-to-Sequence Models",[
["In a traditional encoder-decoder model without attention, what creates the context-vector bottleneck?",["Every input token has a separate decoder","The complete input is summarized into a fixed-size representation","The decoder has no output state","The model uses too many attention heads"],1,"The fixed-size context must summarize the entire input sequence."],
["Why does attention help long-sequence translation?",["It removes all encoder states","It allows the decoder to access different encoder states at each output step","It forces all words to receive equal weights","It eliminates the need for a decoder"],1,"At each output step the decoder can focus on relevant encoder states."],
["During teacher forcing, what is fed to the decoder at the next training step?",["Always a random token","The actual previous target token","Only the encoder's first input","The final EOS token at every step"],1,"Teacher forcing supplies the true previous target token during training."],
["What is exposure bias in teacher-forced Seq2Seq training?",["The encoder receives too many images","Training uses correct previous tokens while inference uses model-generated tokens","The vocabulary has no unknown words","The context vector is always zero"],1,"The model sees ground-truth histories during training but its own predictions at inference."],
["A decoder generates tokens until a special EOS symbol. What does EOS indicate?",["Beginning of embedding","End of sequence","Encoder optimization step","Attention normalization"],1,"EOS marks the end of the generated sequence."]]],
["Attention Mechanism",[
["Which formula represents Bahdanau additive attention scoring?",["hᵀs","vᵀ tanh(Ws + Uh)","hᵀWh only","Softmax(QKᵀ)"],1,"Bahdanau additive attention combines transformed decoder and encoder states through tanh and a learned vector v."],
["In Luong General attention, which expression is used?",["hₜᵀ Wₐ hₛ","vᵀ tanh(Ws + Uh)","hₜ + hₛ only","Softmax(hₜ)"],0,"Luong General uses a learned matrix between decoder and encoder hidden states."],
["If attention scores are [0, 0, 0], what are the softmax weights?",["[1,0,0]","[0,0,1]","[1/3,1/3,1/3]","[0,0,0]"],2,"Equal scores yield a uniform softmax distribution."],
["Why does Luong Dot attention not require an additional learned scoring matrix?",["It does not use hidden states","It directly computes the dot product of compatible hidden-state vectors","It uses a convolution layer","It skips score calculation"],1,"Dot attention directly takes the dot product when the state dimensions are compatible."],
["For attention weights [0.2, 0.5, 0.3] and value vectors [1,0], [0,2], [3,1], what is the context vector?",["[1.1, 1.3]","[1.4, 1.3]","[1.4, 2.0]","[0.9, 1.5]"],0,"Weighted sum: x = 0.2(1)+0.5(0)+0.3(3)=1.1; y = 0.2(0)+0.5(2)+0.3(1)=1.3. The vector is [1.1, 1.3]."]
]]];
const unit3questions = [
["What is the primary purpose of LSTM?",["Image compression","Handling long-term dependencies","Reducing image size","Removing activation functions"],1],
["How many main gates does a standard LSTM have?",["2","3","4","5"],1],
["Which LSTM gate decides what information to discard from cell state?",["Input gate","Output gate","Forget gate","Reset gate"],2],
["Which activation function is commonly used in LSTM gates?",["ReLU","Sigmoid","Softmax","Linear"],1],
["What is the range of sigmoid gate outputs?",["-1 to 1","0 to 1","0 to infinity","-infinity to infinity"],1],
["Which activation function is commonly used for the candidate cell state?",["Tanh","Softmax","ReLU only","Linear only"],0],
["Which equation represents the LSTM cell state update?",["Cₜ = fₜ × Cₜ₋₁ + iₜ × C̃ₜ","Cₜ = fₜ + iₜ only","Cₜ = oₜ × hₜ","Cₜ = xₜ × hₜ"],0],
["How many gates does a standard GRU have?",["1","2","3","4"],1],
["Which gate controls how much past information is used to calculate the GRU candidate state?",["Forget gate","Output gate","Reset gate","Input gate"],2],
["Which GRU gate controls the balance between previous and candidate information?",["Update gate","Forget gate","Output gate","Input gate"],0],
["Which statement about GRU is correct?",["It has a separate cell state","It has three gates","It has no separate cell state","It cannot process sequences"],2],
["Compared with a similar-sized LSTM, GRU generally has:",["More parameters","Fewer parameters","Exactly twice parameters","No trainable parameters"],1],
["What makes a Bidirectional RNN different from a standard RNN?",["It uses only future information","It processes sequences in forward and backward directions","It has no hidden state","It uses only convolution"],1],
["In a Bidirectional RNN, the output at a time step is commonly formed by:",["Adding input and output labels","Concatenating forward and backward hidden states","Deleting backward state","Using only the forward state"],1],
["Why is Bidirectional RNN unsuitable for many strict real-time causal applications?",["It cannot learn weights","It requires future context that may not be available","It cannot use hidden states","It only processes images"],1]
];
const unit4questions = [
["What is tokenization?",["Converting text into images","Breaking text into smaller units called tokens","Removing all numbers","Calculating word importance"],1],
["What is a corpus in NLP?",["A single character","Collection of text documents","A neural network layer","A numerical formula"],1],
["Which technique breaks words into smaller meaningful units?",["Bag of Words","Subword tokenization","TF-IDF","Pooling"],1],
["Which of the following is a common subword tokenization algorithm?",["BPE","K-means","PCA","Adam"],0],
["What is the main difference between stemming and lemmatization?",["Both are identical","Stemming uses rule-based reduction; lemmatization finds dictionary forms","Lemmatization counts words","Stemming calculates IDF"],1],
["Bag of Words primarily represents text using:",["Word order","Word frequency or presence","Sentence grammar","Semantic relationships"],1],
["Which information is ignored by standard BoW?",["Word frequency","Word presence","Word order","Vocabulary"],2],
["If vocabulary is [AI, ML, DL] and document is 'AI AI ML', what is the count-based BoW vector?",["[1,1,1]","[2,1,0]","[1,2,0]","[2,0,1]"],1],
["A sparse vector contains:",["Mostly zeros","Only ones","Only negative values","No numerical values"],0],
["TF measures:",["Rarity across documents","Frequency of a term within a document","Number of documents","Word order"],1],
["IDF measures:",["Document length only","Term rarity across the corpus","Sentence length","Number of characters"],1],
["If N = 10 and DF = 10, what is standard unsmoothed IDF using natural log?",["1","10","0","2.3"],2],
["A term occurs 3 times in a document of 12 words. What is its TF?",["0.25","0.5","3","4"],0],
["If TF = 0.5 and IDF = ln(4/2) ≈ 0.693, what is TF-IDF approximately?",["0.693","0.3465","1.386","0.25"],1],
["Which statement about TF-IDF is correct?",["It understands word order","A word appearing in every document has zero unsmoothed IDF","It always produces dense vectors","It understands synonyms automatically"],1]
];
const unit1questions = [
["What is the main purpose of Transfer Learning?",["Train every model from scratch","Reuse knowledge from a previously trained model","Increase image resolution","Remove all model layers"],1],
["Which dataset is commonly used to pretrain image classification models?",["MNIST only","ImageNet","IMDB","LibriSpeech"],1],
["In feature extraction, what is generally done with pretrained convolutional layers?",["Randomly initialized","Frozen","Deleted","Always retrained"],1],
["Which architecture uses skip connections?",["VGG16","ResNet","MobileNet","AlexNet"],1],
["Which model is designed for mobile and edge devices?",["VGG16","ResNet-152","MobileNet","GoogLeNet only"],2],
["What happens to weights in a frozen layer?",["They increase","They become zero","They do not update during training","They are deleted"],2],
["Fine-tuning usually involves:",["Training only the new classifier","Unfreezing some pretrained layers","Deleting the backbone","Avoiding backpropagation"],1],
["Why is a lower learning rate commonly used during fine-tuning?",["To preserve useful pretrained weights","To increase image size","To freeze all layers","To remove overfitting completely"],0],
["Which is NOT a typical data augmentation technique?",["Rotation","Horizontal flipping","Random cropping","Deleting validation labels"],3],
["Data augmentation primarily helps to:",["Increase overfitting","Improve generalization","Remove all noise","Guarantee 100% accuracy"],1],
["Which data split should normally receive random augmentation?",["Training set","Test set","Validation set","All sets equally"],0],
["What is a key limitation of CNNs?",["They cannot detect edges","They inherently have global attention","Capturing long-range relationships can be difficult","They cannot process images"],2],
["ViT divides an image into:",["Audio frames","Patches","Decision trees","Convolution kernels only"],1],
["Which mechanism helps ViT capture relationships between distant image patches?",["Pooling only","Self-attention","Dropout only","Max convolution"],1],
["Why are positional embeddings used in ViT?",["To add spatial position information","To freeze weights","To augment images","To calculate convolution"],0]
];
const unit2questions = [
["What type of data is RNN primarily designed to handle?",["Independent tabular data only","Sequential data","Static images only","Unordered data"],1],
["What is the main purpose of hidden state in RNN?",["Store only the final output","Carry information from previous time steps","Remove input data","Increase image resolution"],1],
["Current hidden state h(t) depends on:",["Only current input","Only previous output","Current input and previous hidden state","Only future input"],2],
["What does RNN unrolling mean?",["Removing recurrent connections","Expanding the network across time steps","Deleting hidden states","Increasing the number of classes"],1],
["Which statement about RNN weights is correct?",["Every time step has completely different weights","Weights are shared across time steps","Weights are always zero","Weights are not trainable"],1],
["Which architecture is suitable for sentiment analysis of a sentence?",["One-to-One","One-to-Many","Many-to-One","None-to-One"],2],
["Image caption generation is an example of:",["One-to-Many","Many-to-One","One-to-One","Many-to-Many only"],0],
["Machine translation is commonly represented as:",["One-to-One","One-to-Many","Many-to-One","Many-to-Many"],3],
["Long-term dependency refers to:",["Dependence on future labels only","Dependence on information from far earlier time steps","Dependence on model size","Dependence on batch size"],1],
["Vanishing gradient occurs when:",["Gradients become extremely large","Gradients become extremely small","Weights become integers","Inputs become zero"],1],
["Exploding gradient can cause:",["Perfect convergence","Unstable training and huge weight updates","Guaranteed generalization","No backpropagation"],1],
["Which technique is commonly used to control exploding gradients?",["Gradient clipping","Image cropping","One-hot encoding","Pooling"],0],
["How many gates does a standard LSTM have?",["2","3","4","5"],1],
["Which gates are present in a standard GRU?",["Input and output","Forget and output","Reset and update","Input and forget"],2],
["Which statement is correct about LSTM and GRU?",["GRU always has more parameters","Neither can handle sequences","Both help learn long-term dependencies","Both are convolutional networks"],2]
];
const unit5questions = [
["What is the primary purpose of word embeddings?",["Convert words into images","Represent words as dense numerical vectors","Remove punctuation only","Count sentences"],1],
["Which model is commonly used to learn word embeddings?",["Word2Vec","K-means only","Decision Tree","PCA only"],0],
["What does CBOW predict?",["Context words from a target word","Target word from surrounding context words","Sentence length","Document frequency"],1],
["In Skip-Gram, the input is:",["All context words","Center target word","Entire vocabulary","TF-IDF matrix"],1],
["Which statement correctly describes CBOW?",["One word predicts multiple context words","Multiple context words predict one target word","It ignores context completely","It predicts document labels only"],1],
["What is an embedding dimension?",["Number of documents","Number of values in a word vector","Number of sentences","Number of tokens in a corpus"],1],
["What does context window size represent?",["Number of model layers","Number of surrounding words considered","Embedding vector length","Number of classes"],1],
["What is negative sampling used for?",["Deleting negative words","Making Word2Vec training more efficient","Increasing vocabulary size","Removing embeddings"],1],
["Which metric is commonly used to measure similarity between word vectors?",["Accuracy","Cosine similarity","Mean Squared Error only","Recall"],1],
["What is the cosine similarity of two identical non-zero vectors?",["-1","0","1","100"],2],
["Which is an application of word embeddings?",["Sentiment analysis","Only image resizing","CPU scheduling","Disk formatting"],0],
["Which model generates contextual word representations?",["Word2Vec","GloVe","BERT","Standard BoW"],2],
["In static embeddings, the word 'bank' generally has:",["A different vector for every sentence","The same learned vector regardless of context","No vector","Only a binary vector"],1],
["Which embedding technique uses character n-grams to represent words?",["FastText","BoW","TF-IDF","One-hot encoding"],0],
["Which statement about Word2Vec and BERT is correct?",["Both always generate static embeddings","Word2Vec is static while BERT generates contextual representations","BERT is a BoW model","Word2Vec is an image classifier"],1]
];
const unit6questions = [
["What is the primary purpose of a Seq2Seq model?",["Image classification only","Convert an input sequence into an output sequence","Remove stop words","Generate fixed-size images"],1],
["Which are the two main components of a traditional Seq2Seq architecture?",["CNN and Pooling","Encoder and Decoder","Tokenizer and Optimizer","Generator and Discriminator"],1],
["What is the primary role of the encoder?",["Generate output tokens","Process and encode the input sequence","Calculate accuracy","Remove vocabulary"],1],
["What is the primary role of the decoder?",["Tokenize input only","Generate the output sequence","Create training labels","Calculate IDF"],1],
["In a basic RNN-based Seq2Seq model, the context vector is often derived from:",["First input word only","Final encoder hidden state","Output vocabulary size","Random noise"],1],
["What does the context vector represent?",["Only the first token","A summary of input sequence information","The model's learning rate","The output vocabulary"],1],
["What is the context vector bottleneck?",["Decoder has too many output classes","Entire input is compressed into one fixed-size representation","Encoder cannot read words","Model has no hidden state"],1],
["Why do traditional Seq2Seq models struggle with long input sequences?",["They cannot tokenize words","A fixed-size context vector may not retain all information","They always use CNNs","They cannot produce EOS"],1],
["What is the main purpose of attention in Seq2Seq?",["Remove the encoder","Allow the decoder to focus on relevant encoder states","Delete the context vector","Reduce vocabulary to one word"],1],
["Attention context vector is commonly calculated using:",["Weighted sum of encoder hidden states","Random selection of words","Maximum vocabulary count","Only the first hidden state"],0],
["After softmax normalization, attention weights typically:",["Sum to zero","Sum to one","Are always negative","Are always equal"],1],
["What does EOS stand for?",["End of Sentence only","End of Sequence","Encoder Output State","Embedding of Sequence"],1],
["What is teacher forcing?",["Feeding the actual previous target token during training","Removing decoder inputs","Using random tokens during testing","Freezing encoder weights"],0],
["Which is a limitation of teacher forcing?",["It prevents backpropagation","Training and inference input distributions can differ","It removes attention","It cannot train an encoder"],1],
["Which statement correctly compares traditional Seq2Seq and attention-based Seq2Seq?",["Both only use the first input token","Attention allows dynamic access to encoder states","Attention removes the decoder","Traditional Seq2Seq always has more parameters"],1]
];
const unit7questions = [
["What is the primary purpose of Attention Mechanism?",["Remove the decoder","Focus on relevant input information","Increase vocabulary size","Remove all hidden states"],1],
["Bahdanau Attention is also known as:",["Multiplicative Attention","Additive Attention","Self-attention","Local-only Attention"],1],
["Luong Attention is primarily known as:",["Additive Attention","Multiplicative Attention","Convolutional Attention","Random Attention"],1],
["Which activation is used in the standard Bahdanau scoring formula?",["ReLU","Softmax inside score","Tanh","Sigmoid"],2],
["Which is the correct Bahdanau alignment score?",["hᵀh only","vᵀ tanh(Ws + Uh)","Softmax(h) only","W × vocabulary size"],1],
["Which scoring function uses a direct dot product?",["Bahdanau","Luong Dot","Luong General","Luong Concat"],1],
["Which Luong scoring function uses a learnable matrix?",["Dot","General","Both Dot and General equally","Neither"],1],
["Which Luong scoring variant is additive-style rather than multiplicative?",["Dot","General","Concat","None"],2],
["What is the role of Softmax in attention?",["Delete hidden states","Normalize alignment scores into weights","Generate vocabulary","Reduce sequence length"],1],
["The sum of standard softmax attention weights is:",["0","1","10","Depends on vocabulary"],1],
["How is an attention context vector commonly calculated?",["Unweighted sum of all input words","Weighted sum of value vectors","Random hidden state","Maximum word frequency"],1],
["Which decoder state is commonly used in the original Bahdanau formulation?",["Previous decoder state","Only the final output token","Future decoder state","No decoder state"],0],
["Which decoder state is commonly used in Luong's scoring formulation?",["Previous state only","Current decoder state","No hidden state","Encoder input token only"],1],
["Global attention considers:",["Only the first encoder state","All encoder hidden states","Only the last encoder state","Random states"],1],
["If attention scores are [1, 2, 0], which position receives the highest softmax attention weight?",["Position 1","Position 2","Position 3","All equal"],1]
];
const letters = ["A", "B", "C", "D"];
function makeQuestion(form, prompt, options, answer, index, groupName) {
  const field = document.createElement("fieldset"); field.className = "question"; field.dataset.answer = answer;
  const legend = document.createElement("legend"); legend.textContent = `Q${index + 1}. ${prompt}`; field.append(legend);
  const wrap = document.createElement("div"); wrap.className = "options";
  options.forEach((option, i) => { const label = document.createElement("label"); label.className = "option"; label.innerHTML = `<input type="radio" name="${groupName}-${index}" value="${i}"><span>${letters[i]}. ${option}</span>`; wrap.append(label); });
  field.append(wrap); form.append(field);
}
function renderPracticeQuiz(formId, data) {
  const practiceForm = document.getElementById(formId);
  data.forEach(([prompt, options, answer], index) => makeQuestion(practiceForm, prompt, options, answer, index, formId));
  const button = document.querySelector(`[data-quiz="${formId}"]`);
  const result = document.getElementById(button.dataset.result);
  const cards = [...practiceForm.querySelectorAll(".question")];
  practiceForm.addEventListener("change", () => { button.disabled = practiceForm.querySelectorAll("input:checked").length !== cards.length; });
  button.addEventListener("click", () => { let score = 0; cards.forEach(card => { const answer = Number(card.dataset.answer); const selected = Number(card.querySelector("input:checked").value); const correct = selected === answer; if (correct) score++; card.classList.add(correct ? "answered-correct" : "answered-wrong"); card.querySelectorAll("input").forEach(input => input.disabled = true); const note = document.createElement("p"); note.className = "explanation"; note.textContent = correct ? "Correct" : `Correct answer: ${letters[answer]}`; card.append(note); }); result.textContent = `Score: ${score} / ${cards.length}`; button.disabled = true; });
}
renderPracticeQuiz("unit1-quiz", unit1questions);
renderPracticeQuiz("unit2-quiz", unit2questions);
renderPracticeQuiz("unit3-quiz", unit3questions);
renderPracticeQuiz("unit4-quiz", unit4questions);
renderPracticeQuiz("unit5-quiz", unit5questions);
renderPracticeQuiz("unit6-quiz", unit6questions);
renderPracticeQuiz("unit7-quiz", unit7questions);
const mockForm = document.querySelector("#quiz");
let unitNumber = 0, questionNumber = 0;
questions.forEach(([unit, qs]) => { const title = document.createElement("h3"); title.className = "unit-title"; unitNumber++; title.textContent = `Unit ${unitNumber} – ${unit} (Q${questionNumber + 1}–${questionNumber + qs.length})`; mockForm.append(title); qs.forEach(([prompt, options, answer, explanation]) => { makeQuestion(mockForm, prompt, options, answer, questionNumber++, "mock"); const field = mockForm.lastElementChild; field.dataset.explanation = explanation; }); });
const mockCards = [...mockForm.querySelectorAll(".question")]; const progress = document.querySelector("#progress"); const submit = document.querySelector("#submit");
mockForm.addEventListener("change", () => { const count = mockForm.querySelectorAll("input:checked").length; progress.textContent = `${count} / 35`; submit.disabled = count !== 35; });
submit.addEventListener("click", () => { let score = 0; mockCards.forEach(card => { const correctAnswer = Number(card.dataset.answer); const correct = Number(card.querySelector("input:checked").value) === correctAnswer; if (correct) score++; card.classList.add(correct ? "answered-correct" : "answered-wrong"); card.querySelectorAll("input").forEach(input => input.disabled = true); const note = document.createElement("p"); note.className = "explanation"; note.textContent = `${correct ? "Correct" : `Correct answer: ${letters[correctAnswer]}`} · ${card.dataset.explanation}`; card.append(note); }); const band = score >= 32 ? "Excellent" : score >= 28 ? "Very good" : score >= 21 ? "Needs revision" : "Revise all units"; document.querySelector("#result").textContent = `Score: ${score} / 35 — ${band}`; submit.disabled = true; });


// Dashboard presentation and controls
const lessonSections = [...document.querySelectorAll("main > section.lesson, main > section.test-section")];
lessonSections.forEach((section, index) => {
  const title = section.querySelector("h2")?.textContent || "Mock Test";
  const quizForms = [...section.querySelectorAll("form")];
  const quizButtons = quizForms.map(form => section.querySelector(`[data-quiz="${form.id}"]`)).filter(Boolean);
  const quizResults = quizButtons.map(button => document.getElementById(button.dataset.result)).filter(Boolean);
  const isMock = section.classList.contains("test-section");
  const details = document.createElement("details");
  details.className = "topic-card";
  details.id = section.id;
  const summary = document.createElement("summary");
  const icon = document.createElement("span"); icon.className = "topic-icon"; icon.setAttribute("aria-hidden", "true"); icon.innerHTML = section.classList.contains("test-section") ? '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 12 2.5 2.5L16 9"/></svg>' : '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>';
  const name = document.createElement("span"); name.textContent = title;
  const label = document.createElement("span"); label.className = "topic-label"; label.textContent = isMock ? "35 MCQs · all units" : "theory · revision";
  summary.append(icon, name, label);
  const content = document.createElement("div"); content.className = "topic-content";
  [...section.childNodes].forEach(node => {
    if (node.nodeType === 1 && (node.matches("h2") || node.matches("form") || node.matches("button.unit-submit") || node.matches("[aria-live='polite']"))) return;
    if (!isMock && node.nodeType === 1 && ((node.matches("h3") && /MCQ Practice/i.test(node.textContent)) || (node.matches("p") && /questions?\s*[·-].*(easy|medium|hard|contest level)/i.test(node.textContent)))) return;
    content.append(node);
  });
  if (isMock) { content.append(...quizForms, ...quizButtons, ...quizResults); }
  else {
    const action = document.createElement("button"); action.className = "open-topic-quiz"; action.type = "button"; action.innerHTML = '<svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M8 4h11v16H5V7zM8 4v4h8V4M8 13h8M8 16h5"/></svg><span>Open unit quiz in Practice Hub</span>';
    action.addEventListener("click", () => openPracticeHubFor(section.id)); content.append(action);
  }
  details.append(summary, content);
  section.replaceWith(details);
});
const totalQuestions = 140;
function openPracticeHubFor(topic) {
  showPracticeHubOnly();
  setHubTab("quiz");
  applyHubTopicFilter(topic);
  document.getElementById("practice-hub-section").scrollIntoView({behavior:"smooth", block:"start"});
}
function renderMath(root = document.querySelector("main")) { if (window.renderMathInElement) renderMathInElement(root, {delimiters:[{left:"\\(",right:"\\)",display:false}], throwOnError:false}); }
renderMath();
const allQuizForms = [...document.querySelectorAll("main form")];
function updateDashboardProgress() {
  const answered = document.querySelectorAll('main input[type="radio"]:checked').length;
  const correct = document.querySelectorAll("main .question.answered-correct").length;
  document.getElementById("answered-count").textContent = `${answered}/${totalQuestions}`;
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("quiz-progress").style.width = `${Math.min(100, answered / totalQuestions * 100)}%`;
}
document.querySelectorAll("main form").forEach(form => form.addEventListener("change", updateDashboardProgress));
document.getElementById("expand-all").addEventListener("click", () => document.querySelectorAll(".topic-card:not(.hidden-by-filter):not(.hidden-by-search)").forEach(card => card.open = true));
document.getElementById("collapse-all").addEventListener("click", () => document.querySelectorAll(".topic-card:not(.hidden-by-filter):not(.hidden-by-search)").forEach(card => card.open = false));
function clearTopicFilter() {
  document.querySelectorAll(".topic-card").forEach(card => card.classList.remove("hidden-by-filter"));
  document.getElementById("practice-hub-section").classList.remove("hidden-by-filter");
  document.querySelectorAll(".topic-nav a").forEach(link => link.classList.remove("active-filter"));
}
function showPracticeHubOnly() {
  clearTopicFilter();
  document.querySelectorAll(".topic-card").forEach(card => { card.classList.add("hidden-by-filter"); card.open = false; });
  document.body.classList.remove("notes-mode");
  document.getElementById("practice-hub-section").classList.remove("hidden-by-filter", "hidden-by-search");
  document.getElementById("back-to-notes").innerHTML = '<svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-2"/></svg><span>Back to notes</span>';
}
function showNotesMode() {
  clearTopicFilter();
  document.getElementById("practice-hub-section").classList.add("hidden-by-filter");
  document.querySelectorAll(".topic-card").forEach(card => { card.classList.remove("hidden-by-search", "hidden-by-filter"); card.open = false; });
  allQuizForms.forEach(form => document.querySelector(`[data-quiz="${form.id}"]`)?.closest("details.topic-card")?.classList.add("quiz-in-hub-only"));
  document.body.classList.add("notes-mode");
  document.getElementById("back-to-notes").innerHTML = '<svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-2"/></svg><span>Practice Hub</span>';
}
document.getElementById("back-to-notes").addEventListener("click", showNotesMode);
document.getElementById("hub-quizzes-tab").addEventListener("click", () => setHubTab("quiz"));
document.getElementById("hub-numericals-tab").addEventListener("click", () => setHubTab("numerical"));
function setHubTab(kind) {
  document.getElementById("hub-quizzes-tab").classList.toggle("active", kind === "quiz");
  document.getElementById("hub-numericals-tab").classList.toggle("active", kind === "numerical");
  document.getElementById("quiz-topic-cards").hidden = kind !== "quiz";
  document.getElementById("numerical-topic-cards").hidden = kind !== "numerical";
  applyHubTopicFilter("all");
}
function applyHubTopicFilter(topic) {
  document.querySelectorAll(".hub-filter").forEach(button => button.classList.toggle("active", button.dataset.topic === topic));
  document.querySelectorAll(".practice-links a[data-topic-card]").forEach(card => card.classList.toggle("hub-card-hidden", topic !== "all" && card.dataset.topicCard !== topic));
}
document.getElementById("hub-filters").addEventListener("click", event => {
  const button = event.target.closest(".hub-filter");
  if (button) applyHubTopicFilter(button.dataset.topic);
});
document.getElementById("reset-quiz").addEventListener("click", () => {
  allQuizForms.forEach(form => {
    form.reset();
    form.querySelectorAll("input").forEach(input => input.disabled = false);
    form.querySelectorAll(".question").forEach(card => { card.classList.remove("answered-correct", "answered-wrong"); card.querySelectorAll(".explanation").forEach(note => note.remove()); });
    const button = document.querySelector(`[data-quiz="${form.id}"]`); if (button) button.disabled = true;
  });
  document.querySelectorAll("#submit").forEach(button => button.disabled = true);
  document.querySelectorAll("#result,[id$='-result']").forEach(result => result.textContent = "");
  updateDashboardProgress();
  renderMath();
});
document.getElementById("concept-search").addEventListener("input", event => {
  const term = event.target.value.trim().toLocaleLowerCase();
  clearTopicFilter();
  document.getElementById("practice-hub-section").classList.toggle("hidden-by-search", Boolean(term));
  document.querySelectorAll(".topic-card").forEach(card => { card.classList.toggle("hidden-by-search", term && !card.textContent.toLocaleLowerCase().includes(term)); if (term && card.textContent.toLocaleLowerCase().includes(term)) card.open = true; });
});
document.querySelector(".topic-nav").addEventListener("click", event => {
  const link = event.target.closest("a[href^='#']"); if (!link) return;
  const target = document.querySelector(link.getAttribute("href"));
  if (link.classList.contains("plan-link")) {
    showPracticeHubOnly();
    return;
  }
  if (!target?.matches("details.topic-card")) return;
  if (target.classList.contains("quiz-in-hub-only")) { openPracticeHubFor(target.id); return; }
  document.getElementById("concept-search").value = "";
  document.querySelectorAll(".topic-card").forEach(card => {
    card.classList.remove("hidden-by-search");
    card.classList.toggle("hidden-by-filter", card !== target);
  });
  document.getElementById("practice-hub-section").classList.add("hidden-by-filter");
  document.body.classList.add("notes-mode");
  document.getElementById("back-to-notes").innerHTML = '<svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-2"/></svg><span>Practice Hub</span>';
  target.open = true;
  renderMath(target);
  document.querySelectorAll(".topic-nav a").forEach(item => item.classList.toggle("active-filter", item === link));
});
updateDashboardProgress();
renderMath();

document.addEventListener("click", event => {
  const link = event.target.closest("a[href^='#']");
  if (!link) return;
  const target = document.querySelector(link.getAttribute("href"));
  const card = target?.closest("details.topic-card");
  if (card) {
    if (card.classList.contains("quiz-in-hub-only")) { event.preventDefault(); openPracticeHubFor(card.id); return; }
    document.querySelectorAll(".topic-card").forEach(item => item.classList.toggle("hidden-by-filter", item !== card));
    document.getElementById("practice-hub-section").classList.add("hidden-by-filter");
    document.body.classList.add("notes-mode");
    document.getElementById("back-to-notes").innerHTML = '<svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M9 14 4 9l5-5M4 9h10a6 0 0 1 0 12h-2"/></svg><span>Practice Hub</span>';
    card.open = true;
    renderMath(card);
  } else if (target?.id === "practice-hub-section") {
    showPracticeHubOnly();
  }
});
showNotesMode();



