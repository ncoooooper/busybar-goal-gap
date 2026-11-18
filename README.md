# Goal Gap

Calculate how much of a purchase remains and how many regular deposits it will take.

When deciding whether a purchase can wait another month, a deposit count is easier to use than a percentage. Goal Gap gives you both from the same three amounts.

## Count the deposits left

1. Start on **Remaining**. With a price of 20,000 and 8,000 already set aside, the front shows 60.0% still to save.
2. Turn the wheel to **Deposits**. At 2,000 per deposit the answer is six. The final deposit can be smaller than the others.
3. Turn back to compare the deposit count with the percentage. Keep price, saved amount and deposit in the same currency units.

![The front changes from 60.0% remaining to six deposits.](media/guide/count-deposits.gif)

## Try a different price

1. Click the wheel to edit inputs. In **Price**, turn up to raise the purchase price or down to lower it. Click to move to the saved amount and next to the regular deposit.
2. Press **Start** to return to the result. The values are stored on the device.
3. With the full amount already saved the deposit page reads **Ready**. When more is needed and the deposit is zero it asks you to set a deposit.

![The editor increases and restores the price before returning to the remaining percentage.](media/guide/edit-purchase-price.gif)

## Example from the emulator

Subtract the saved 8,000 from the 20,000 price to get a gap of 12,000. If regular deposits were 2,500 instead, you would need five deposits, with only 2,000 due on the last one. Local on-device computation using editable numeric inputs.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)
