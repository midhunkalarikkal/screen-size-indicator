# 📱 Screen Size Indicator

A simple and customizable React component to display the current screen size on your webpage. Ideal for quick responsive design testing during development! 🛠️

## ⚙️ Installation

```bash
npm install screen-size-indicator
```

## 🚀 Usage

```bash
import ScreenSizeIndicator from 'screen-size-indicator';

function App() {
  return (
    <div>
      <ScreenSizeIndicator
        position="top-right"
        bgColor="bg-black"
        textColor="text-green-300"
        textSize="text-2xl"
      />
      {/* Your other components */}
    </div>
  );
}

export default App;

```

## ✨ Props

position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
Set the position of the indicator on the screen.

bgColor: string (Optional)
Background color of the indicator. Default: bg-green-500.

textColor: string (Optional)
Text color of the indicator. Default: text-white.

textSize: string (Optional)
Font size of the text. Default: text-md.

## License  📜
MIT License.

## Downloads
![npm](https://img.shields.io/npm/dt/screen-size-indicator)
