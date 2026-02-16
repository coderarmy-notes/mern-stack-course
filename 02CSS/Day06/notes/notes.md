# Lecture 06: Media query , Shadows and Overflow

- [Lecture 06: Media query , Shadows and Overflow](#lecture-06-media-query--shadows-and-overflow)
  - [Media Query](#media-query)
    - [The First Principle: One Size Does Not Fit All](#the-first-principle-one-size-does-not-fit-all)
    - [The Core Problem](#the-core-problem)
    - [The Logical Solution: The Media Query](#the-logical-solution-the-media-query)
    - [The Key Media Features: min-width and max-width](#the-key-media-features-min-width-and-max-width)
    - [max-width (The "Desktop First" or "Shrinking" Logic)](#max-width-the-desktop-first-or-shrinking-logic)
    - [min-width (The "Mobile First" or "Growing" Logic)](#min-width-the-mobile-first-or-growing-logic)
    - [The Combined Form: Targeting a Specific Range](#the-combined-form-targeting-a-specific-range)
  - [Box Shadows in CSS](#box-shadows-in-css)
    - [The First Principle: Light Creates Shadow, Shadow Creates Depth](#the-first-principle-light-creates-shadow-shadow-creates-depth)
    - [The Core Problem](#the-core-problem-1)
    - [The Logical Solution: The box-shadow Property](#the-logical-solution-the-box-shadow-property)
    - [Step 1: offsetX and offsetY (The Position of the Light Source)](#step-1-offsetx-and-offsety-the-position-of-the-light-source)
    - [Step 2: blurRadius (The Key to Realism)](#step-2-blurradius-the-key-to-realism)
    - [Step 3: color with rgba() (The Secret to Subtlety)](#step-3-color-with-rgba-the-secret-to-subtlety)
    - [Step 4: spreadRadius (Controlling the Size)](#step-4-spreadradius-controlling-the-size)
    - [Step 5: inset (Flipping the Shadow)](#step-5-inset-flipping-the-shadow)
    - [Multiple Shadows](#multiple-shadows)
  - [Overflow in CSS](#overflow-in-css)
    - [The First Principle: A Box Has a Fixed Size, But Content is Fluid](#the-first-principle-a-box-has-a-fixed-size-but-content-is-fluid)
    - [The Core Problem: The Inevitable Conflict](#the-core-problem-the-inevitable-conflict)
    - [The Logical Solution: The overflow Property](#the-logical-solution-the-overflow-property)
    - [The Four overflow Values](#the-four-overflow-values)
    - [1. overflow: visible; (The Default)](#1-overflow-visible-the-default)
    - [2. overflow: hidden;](#2-overflow-hidden)
    - [3. overflow: scroll;](#3-overflow-scroll)
    - [4. overflow: auto; (The Smart and Common Choice)](#4-overflow-auto-the-smart-and-common-choice)
    - [Controlling Axes Independently: overflow-x and overflow-y](#controlling-axes-independently-overflow-x-and-overflow-y)

<br>
<br>

## Media Query

### The First Principle: One Size Does Not Fit All

The most fundamental truth of modern web design is that your website will be viewed on an incredible variety of screens. A design that is optimized for a 27-inch desktop monitor is fundamentally unusable on a 6-inch phone screen held vertically.

This is not a failure of design; it is a physical reality. The context in which the user is viewing your content has changed dramatically.

### The Core Problem

How do we create a single website that can **adapt its layout** to provide an optimal experience for all these different contexts?

- A simple, single-column layout is perfect for a narrow phone screen.
- A two-column layout might be ideal for a tablet.
- A three-column layout might make the best use of space on a wide desktop monitor.

We need a mechanism within CSS to apply different styling rules based on the properties of the device rendering the page, most importantly, the **width of the browser's viewport**. We need an "if-then" statement for our styles.

### The Logical Solution: The Media Query

The @media rule is CSS's native "if-then" statement. It creates a conditional block. The CSS rules inside this block will **only be applied if the condition is met**.

The syntax logically breaks down into three parts:

@media media-type and (media-feature)

1. **@media**: The "if." It tells the browser a conditional block is starting.
2. **media-type**: "If the device is a..." screen, print, speech. We almost always use screen.
3. **(media-feature)**: "and if it has this characteristic..." This is the actual condition.

---

### The Key Media Features: min-width and max-width

The most critical "characteristic" we need to check is the viewport width.

### max-width (The "Desktop First" or "Shrinking" Logic)

- **The Question it Asks:** "Is the browser window **this width or smaller**?"
- **The Logic:** You can think of it as setting an **upper bound**. The styles will apply from 0px up to the max-width you specify.
- **Analogy:** "You must be **at most** 5 feet tall to ride this ride." Anyone 5'0" or shorter can ride.
- **Use Case:** This is traditionally used in a "desktop-first" approach. You write your desktop styles first, and then use max-width media queries to "fix" the layout as the screen gets smaller. code CSS
    
    
    ```css
    /* --- Default styles (for desktop) --- */
    .container {
      grid-template-columns: 1fr 1fr 1fr; /* 3 columns */
    }
    
    /* --- Tablet styles --- */
    @media screen and (max-width: 1024px) {
      .container {
        grid-template-columns: 1fr 1fr; /* Change to 2 columns */
      }
    }
    
    /* --- Mobile styles --- */
    @media screen and (max-width: 767px) {
      .container {
        grid-template-columns: 1fr; /* Change to 1 column */
      }
    }
    ```
    

### min-width (The "Mobile First" or "Growing" Logic)

- **The Question it Asks:** "Is the browser window **this width or wider**?"
- **The Logic:** You can think of it as setting a **lower bound**. The styles will apply from the min-width you specify up to infinity.
- **Analogy:** "You must be **at least** 5 feet tall to ride this ride." Anyone 5'0" or taller can ride.
- **Use Case:** This is the cornerstone of the modern "mobile-first" approach. You write simple, single-column mobile styles first, and then use min-width to add complexity as the screen gets larger. code CSS
    
    
    ```css
    /* --- Default styles (for mobile) --- */
    .container {
      grid-template-columns: 1fr; /* 1 column by default */
    }
    
    /* --- Tablet styles AND UP --- */
    @media screen and (min-width: 768px) {
      .container {
        grid-template-columns: 1fr 1fr; /* Become 2 columns */
      }
    }
    
    /* --- Desktop styles AND UP --- */
    @media screen and (min-width: 1024px) {
      .container {
        grid-template-columns: 1fr 1fr 1fr; /* Become 3 columns */
      }
    }
    ```
    

This approach is generally cleaner and more efficient.

---

### The Combined Form: Targeting a Specific Range

- **The Core Problem:** The rules above apply from a certain point "and up" or "and down". What if we want to apply styles **only to a specific range**, like a tablet in portrait mode? We need a way to combine a min-width and a max-width.
- **The Logical Solution:** Use the and keyword to chain multiple conditions together. The styles will only apply if **ALL conditions are true**.
- **The Syntax:**
    
    @media screen and (min-width: [smaller-value]) and (max-width: [larger-value])
    
- **The Question it Asks:** "Is the browser window **wider than the min value AND narrower than the max value**?"
- **Analogy:** "To get this discount, you must be **at least 18 years old AND at most 25 years old**." You must satisfy both conditions.
- **Example: Targeting a "Tablet" Viewport Range** code CSS
    
    Let's say we want a special layout *only* for screens between 768px and 1023px wide.
    
    ```css
    /* Default (Mobile) styles */
    .sidebar {
      display: none; /* Hide the sidebar on mobile */
    }
    
    /* Tablet-only styles */
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      body {
        background-color: lightgoldenrodyellow; /* Give a visual cue */
      }
      .container {
        grid-template-columns: 1fr 1fr; /* A two-column layout */
      }
      .sidebar {
        display: block; /* Show the sidebar */
      }
    }
    
    /* Desktop and up styles */
    @media screen and (min-width: 1024px) {
      body {
        background-color: white; /* Back to white */
      }
      .container {
        grid-template-columns: 1fr 3fr; /* A different two-column layout */
      }
      .sidebar {
        display: block; /* The sidebar is also visible here */
      }
    }
    ```
    

In this example, the yellow background will **only** appear when the screen width is between 768px and 1023px. This allows you to create highly specific styles for different "breakpoints" in your design, giving you complete control over the responsive experience.

## Box Shadows in CSS

### The First Principle: Light Creates Shadow, Shadow Creates Depth

The most fundamental truth is that on a 2D screen, we don't have true depth. We can only **simulate** it. In the real world, our brains perceive depth based on how light interacts with objects. When an object is closer to you (or "floating" above a surface), it casts a shadow onto the surface behind it.

The characteristics of this shadow (its position, softness, and darkness) give us powerful visual cues about the object's position in 3D space.

### The Core Problem

How do we, as developers, create a realistic, simulated shadow for our rectangular element "boxes"? A simple, hard-edged border doesn't create depth; it just creates an outline.

We need a CSS property that can generate a shadow and give us precise control over its:

1. **Position:** Where is the light source coming from?
2. **Softness (Blur):** Is it a sharp, hard shadow from a direct light source, or a soft, diffuse shadow from an ambient light source?
3. **Size (Spread):** How big is the shadow relative to the object?
4. **Color & Transparency:** How dark and solid is the shadow?

### The Logical Solution: The box-shadow Property

The box-shadow property is the CSS solution. It's a highly versatile property that allows you to "paint" a shadow based on the shape of an element's box.

Let's build a realistic shadow step-by-step, understanding the logic of each value in its syntax.

**The Full Syntax:** box-shadow: [inset] offsetX offsetY blurRadius spreadRadius color;

---

### Step 1: offsetX and offsetY (The Position of the Light Source)

- **The Problem:** We need to tell the browser where to place the shadow relative to the element.
- **The Logic:** We define the shadow's position with two values: a horizontal offset (offsetX) and a vertical offset (offsetY).
    - offsetX: A positive value pushes the shadow to the **right**. A negative value pushes it to the **left**.
    - offsetY: A positive value pushes the shadow **down**. A negative value pushes it **up**.
- **The "Hard Shadow" (Our Starting Point):** Let's start with a simple, hard-edged shadow. We'll omit the blur and spread for now. code CSS
    
    
    ```css
    .box {
      box-shadow: 10px 5px black;
    }
    ```
    
    - **Result:** This creates a solid black copy of the box, shifted 10px to the right and 5px down. It looks very fake and unnatural, like a bad 90s graphic effect. This tells us that position alone is not enough.

---

### Step 2: blurRadius (The Key to Realism)

- **The Problem:** The hard shadow looks fake because real-world shadows have soft, blurry edges.
- **The Logic:** We need a value to control the "softness" or "diffusion" of the shadow. This is the blurRadius.
    - A value of 0 (the default if omitted) means a perfectly sharp edge.
    - A larger value (e.g., 15px) tells the browser to apply a Gaussian blur algorithm over a 15px radius, making the shadow's edges soft and faded.
- **Improving Our Shadow:** code CSS
    
    
    ```css
    .box {
      box-shadow: 10px 5px 15px black;
    }
    ```
    
    - **Result:** This is a huge improvement. The shadow now has soft, fuzzy edges and looks much more like it's being cast by a real object.

---

### Step 3: color with rgba() (The Secret to Subtlety)

- **The Problem:** Our blurred shadow is still pure black, which is very harsh. Real shadows are not completely opaque; they are semi-transparent, allowing the color of the surface behind them to show through.
- **The Logic:** We need to define the shadow's color using a format that supports transparency. This is the perfect use case for rgba().
- **Creating a Modern, Subtle Shadow:** code CSS
    
    
    ```css
    .box {
      /* A small offset, a nice blur, and a light, transparent black */
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    }
    ```
    
    - **Result:** This is the style of shadow you see on most modern websites (like Google's Material Design). It's subtle, soft, and feels natural. The 0px horizontal offset often makes it look like the light is coming directly from above. The rgba(0, 0, 0, 0.1) creates a black shadow that is only 10% opaque.

---

### Step 4: spreadRadius (Controlling the Size)

- **The Problem:** What if we want the shadow to be bigger or smaller than the element itself *before* the blur is applied?
- **The Logic:** We add an optional spreadRadius value.
    - A positive value (e.g., 5px) will expand the shadow, making it 5px bigger on all sides *before* the blur. This creates a larger, more prominent shadow.
    - A negative value (e.g., -5px) will contract the shadow, making it smaller than the element. This can create a subtle "inner glow" effect.
- **Example:** code CSS
    
    
    ```css
    .box {
      /* A large, diffuse "glow" effect */
      box-shadow: 0 0 20px 5px rgba(0, 150, 255, 0.5);
    }
    ```
    

---

### Step 5: inset (Flipping the Shadow)

- **The Problem:** All our shadows so far are "drop shadows," appearing *behind* the element. How do we make an element look like it's pressed *into* the page?
- **The Logic:** Create a keyword that flips the shadow to be drawn on the **inside** of the element's border instead of the outside. This is the inset keyword.
- **Example:** code CSS
    
    
    ```css
    .input-field:focus {
      /* Creates a subtle inner shadow to show the field is active */
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    ```
    

### Multiple Shadows

Finally, the box-shadow property is extra powerful because you can apply **multiple shadows** to the same element by separating them with a comma. This is how designers create incredibly realistic and nuanced depth effects.

code CSS

```css
.card {
  /* A short, subtle shadow right underneath */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),
              /* A longer, softer shadow for ambient depth */
              0 1px 2px rgba(0,0,0,0.24);
}
```

By understanding these five components and how they build on each other, your students can move from creating fake, hard-edged shadows to crafting the subtle, realistic depth that defines modern web design.

## Overflow in CSS

### The First Principle: A Box Has a Fixed Size, But Content is Fluid

The most fundamental truth is that when you define a box in CSS (like a <div>), you often give it a specific width and height. You are creating a container with finite boundaries.

However, the content you put inside that box (text, images, etc.) is fluid. You might have a short paragraph or a very long one. You can't always know in advance how much content a box will need to hold.

### The Core Problem: The Inevitable Conflict

This leads to an inevitable conflict: **What happens when the content is bigger than the box it's supposed to fit in?**

You have a box that is 200px tall, but you place a paragraph inside it that needs 400px of vertical space to be displayed. The content is "overflowing" its container.

The browser cannot just delete the extra content—its primary job is to display everything. And it cannot magically resize the box if you've explicitly told it to be 200px tall. So, what should it do?

### The Logical Solution: The overflow Property

To solve this, CSS provides a property that lets you, the developer, take control and decide exactly how the browser should handle this "overflowing" content. This is the **overflow** property.

Let's explore the four main choices you can make, using a clear analogy.

**The Analogy:** An Overfilled Cup of Water

- **The Box:** A glass cup with a fixed size.
- **The Content:** The water you are pouring into it.
- **Overflow:** When you pour in more water than the cup can hold.

---

### The Four overflow Values

### 1. overflow: visible; (The Default)

- **What it does:** The content simply **spills out** of the box's boundaries. It will render on top of any other elements that come after it, often breaking the layout of your page.
- **Analogy:** The water overflows the cup and spills all over the table, making a mess and getting on top of other things on the table.
- **Why is this the default?** The browser's #1 priority is to **show the user all the content**. It would rather make the layout look messy than hide information from the user by default. This is a safe, if sometimes ugly, starting point.

**Example:**

```css
.box {
  height: 100px;
  overflow: visible; /* Default behavior */
}
```

**Result:** The text will start inside the box and then continue flowing down the page, potentially covering up the content that comes after it.

---

### 2. overflow: hidden;

- **What it does:** The content is **clipped** at the boundaries of the box. Anything that overflows is simply cut off and becomes invisible and inaccessible.
- **Analogy:** You put a flat lid on the overflowing cup. The extra water is still in there, but it's completely hidden, and you can't get to it.
- **When to use it:**
    - To strictly enforce a design where nothing should ever break out of its container.
    - To hide parts of an image for a "masking" effect.
    - A very common use case: to contain child elements that have been positioned with position: absolute that might otherwise poke out of their parent container.

**Example:**

```css
.box {
  height: 100px;
  overflow: hidden;
}
```

**Result:** The user will only see the first few lines of text that fit within the 100px height. The rest of the paragraph will be gone.

---

### 3. overflow: scroll;

- **What it does:** The content is clipped, but the browser adds **scrollbars (both horizontal and vertical)** to the box, allowing the user to scroll and see the rest of the content.
- **The "Gotcha":** This value adds the scrollbars **whether they are needed or not**. Even if the content fits perfectly, you will still see disabled scrollbar tracks, which can sometimes look clunky.
- **Analogy:** The overflowing cup is placed in a special holder with scroll wheels on both the side and the bottom, allowing you to move the water's surface up/down and left/right. The wheels are always there.

**Example:**

```css
.box {
  height: 100px;
  overflow: scroll;
}
```

**Result:** A 100px tall box with a vertical scrollbar that allows the user to read the entire paragraph. A horizontal scrollbar will also be present, although it will be disabled if the text doesn't overflow horizontally.

---

### 4. overflow: auto; (The Smart and Common Choice)

- **What it does:** This is the "smart" version of scroll. The browser will **only add scrollbars if and when they are actually needed**. If the content fits, no scrollbars appear. If it overflows vertically, only a vertical scrollbar appears.
- **Analogy:** A "smart" holder that only makes the scroll wheels appear when the cup is actually overflowing. It's clean and efficient.
- **When to use it:** This is the value you will use **95% of the time** when you want to create a scrollable area. It's perfect for chat windows, sidebars with long lists, code display blocks, or any container with dynamic content.

**Example:**

code CSS

```css
.box {
  height: 100px;
  overflow: auto;
}
```

**Result:** If the text is short, it will look like a normal box. If the text is long, a vertical scrollbar will appear automatically. This is the most user-friendly and aesthetically pleasing option.

### Controlling Axes Independently: overflow-x and overflow-y

You can also control the overflow behavior for the horizontal (x) and vertical (y) axes separately.

- overflow-x: scroll; will add a horizontal scrollbar.
- overflow-y: hidden; will clip any vertical overflow.

This is useful for specific cases, like creating a horizontally scrolling gallery of images.