---
sidebar_position: 3
---

# 注意事項
<hr/>
- オプションプレハブを除き、Unity上で音源の範囲設定をしないでください。アニメーションによって上書きされてしまいます。VRChat内でパイメニューから操作してください。

- アバターの耳(Audio Listener)はビューポイントにあります。頭の半径分だけ内側に配置されているということなので、めり込みも考慮して音源は大きめにすることをおすすめします。

- OSC利用プレハブで28bit、マニュアルプレハブで19bitのパラメータメモリを消費します。アバター内で合計256bitを超えないようにしてください。

- 特殊な構造のため、心音を他の好きな音源（音楽やSEなど）に変更することは出来ません。他の心音素材に差し替えたい場合もAudacityなどでの編集が必要です。

- アニメーター内の全てのステートはWriteDefault OFF（DBTを除く）で統一されています。アバター側でWDが正しく統一されている場合は問題ありませんが、WDが混在していると不具合が発生する可能性があります。

- 仕様上、心拍数を手動調整する場合は自分と相手で心拍数の誤差が±１発生する場合があります。