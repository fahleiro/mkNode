# mkNode
_Node package self-hosted documentation using markdown language_

# Production examploe
https://mknode-faleiroqa.onrender.com/

# How to use
1. Install `npm install mknode`
2. Start doc base `mknode start`
3. Create your doc in `/docs/doc.md`
4. Set your own doc font in `doc.font`
    ```
    DOC_FONT: Helvetica
    ```
5. Define menu
    ```json
        {
    "Option 1": {
        "Steps": {
        "Step 1": "step1.md",
        "Step 2": "step2.md",
        "Step 3": "step3.md"
        }
    },
    "Option 2": {
        "Steps": {
        "Step 1": "step1.md",
        "Step 2": "step2.md",
        "Step 3": "step3.md"
        }
    },
    "Option 3": {
        "Steps": {
        "Step 1": "step1.md",
        "Step 2": "step2.md",
        "Step 3": "step3.md"
        }
    }
    }
    ```
6. Run your doc `mknode run` & Enjoy!

# Image Demo
![Example1](https://i.imgur.com/6i6f1R8.png)

