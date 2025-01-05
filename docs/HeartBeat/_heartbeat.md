---
sidebar_class_name: hidden
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# なめらか心音ギミック 2.1
## 導入に必要なもの
<hr/>
- Unity 2022.3.22f1
- VRCSDK 最新バージョン
- Modular Avatar 最新バージョン

## OSC機能について
<Tabs>
    <TabItem value="def" label="概要" default>
        :::note
        心音ギミックの使用に必須ではありません。
        :::
        心拍数をVRChatに送信することで、VRChat内での心拍数をリアルタイムでアバターと同期させることができます。  
        PulsoidとHRtoVRChatを組み合わせる方法と、それを介さず直接送信する方法があります。（それ以外にもありますがここでは省略します）  
        よろしければこちらも参考にしてください。  
        [VRChatに心拍数を送る時の環境メモ](https://note.com/bekosan/n/nf6a976867771)
    </TabItem>
    <TabItem value="pulsoid" label="Pulsoid">
        :::caution
        ！必ず端末がPulsoidに対応しているか確認してください！  
        https://www.blog.pulsoid.net/monitors
        :::
        <hr />
        1. Pulsoidの設定
            1. https://note.com/kendesu/n/n81275f17986a の 3.2 までを真似する  

            1. PulsoidKey(access_token)の取得  
            [ココ](https://pulsoid.net/oauth2/authorize?response_type=token&client_id=8c48435f-a0c6-4512-9bf7-6768678b625c&redirect_uri=&scope=data:heart_rate:read&state=&response_mode=web_page)に移動して、先程作ったアカウントでログイン。  
            右下の Authorize App を押すとトークンが伏せ字で表示されるので、Copy to clipboard でコピーしておきます。  
            **トークンが漏れると他人から心拍数が取得出来てしまうので取り扱いには注意してください。**  
        1. HRToVRChatの設定
            1. https://hrtovrchat.fortnite.lol/download#h.ha8hgsfz56g2  
            から一番上のWindowsのLauncherをダウンロード

            1. Launcherを起動したらConfigタブを開き、hrTypeを pulsoidsocket に変更して、SAVEボタンを押す。
            ![](contents\HRtoVRChat_a.png)

            1. 加えてpulsoidkeyを選び、さっきコピーしたトークンを貼り付け、SAVEボタンを押す。

            1. 設定が完了しました！Pulsoidを起動した状態でProgramタブからSTARTボタンを押すとOSC信号がVRChatに送信されます。
    </TabItem>
    <TabItem value="ble" label="Bluetooth LE">
        :::note
        Bluetooth Low Energy（BLE）に対応した心拍計が必要です。
        :::
        ただし専用の心拍計であればスマートウォッチよりも精度が高く電池の持ちも良いことが多いです。  
        導入や起動もPulsoidに比べてかなりシンプルで非常に楽です。  
        [オススメの心拍計](https://www.amazon.co.jp/dp/B08882MGXD) です。安いタイミングなら4000円以下で買えます。  
        
        <hr/>
        https://github.com/Bekosantux/Beko.BluetoothHeartRateOSC

        1. WindowsにBLE心拍計をペアリングします。  
        ※Windows11の場合、「Bluetoothデバイスの検出」設定を「詳細」に変更しないと一覧に表示されないことがあります。

        1. 画面右のReleaseからダウンロードしたzipを展開して、exeファイルを実行するだけで使えます。（数字が出てきたら成功。ウィンドウを閉じても裏で動きます。）
    </TabItem>
</Tabs>

## 導入方法
<hr/>
### 手順
1. *BekoShop/HeartBeat_Gimmick/Prefabs* の中にあるプレハブをアバター直下に配置します。OSC機能を利用する場合はHeartBeat_OSC、そうでなければHeartBeat_Manualプレハブを選択してください。

1. プレハブ内の **AudioSources(プレハブ本体ではない)** をアバターの胸あたりに配置します。  
![音源の配置](contents\HBSetting_a.png)

1. HRCounter をほっぺたや頭上など心拍数を表示したい場所に配置します。デフォルトではHeadボーンに追従する設定になっています。  
![心拍計の配置](contents\HBSetting_b.png)

**導入完了！**

### 心音の変え方
![心音の変え方](contents\HBSetting_c.png)  
*Assets/BekoShop/HeartBeat_Gimmick/Resources/Sounds* にA,B,C,Dの4種類の心音が2つに分割されて入っています。プレハブ内のAudio Sourceに0と1に対応するものを適用してください。0→1の順番で繰り返し再生されるように設計していますが、お好みで違う種類・順番の心音を適用しても大丈夫です。

## 注意事項
<hr/>
- Unity上で音源の範囲設定をしないでください。アニメーションによって上書きされてしまいます。VRChat内でパイメニューから操作してください。

- アバターの耳(Audio Listener)はビューポイントにあります。音源は顔のめり込みも考慮して、胸の表面より少し内側くらいに置くことをおすすめします。

- OSC利用プレハブで28bit、マニュアルプレハブで19bitのパラメータメモリを消費します。アバター内で合計256bitを超えないようにしてください。

- 特殊な構造のため、心音を他の好きな音源（音楽やSEなど）に変更することは出来ません。他の心音素材に差し替えたい場合もAudacityなどでの編集が必要です。

- アニメーター内の全てのステートはWriteDefault OFF（DBTを除く）で統一されています。アバター側でWDが正しく統一されている場合は問題ありませんが、WDが混在していると不具合が発生する可能性があります。

- 仕様上、心拍数を手動調整する場合は自分と相手で心拍数の誤差が±１発生する場合があります。

## パイメニュー
<hr/>
![Menu](contents\PiMenu.png)
- 心拍計: 心拍数カウンターの表示を切り替えます。
- 心拍計明滅: 心拍計の明滅をするかどうかを切り替えます。
- 心音: 心音の有効無効を切り替えます。
- 心音ミュート(ローカル): 自分目線で心音をミュートにします。範囲を大きくしたいけど、自分にも聞こえる状態を避けたい場合に使用します。
- 自分の心音(ローカル): 現在の心音の聞こえ方を確認します。
- 心音範囲調整: 心音が聞こえる範囲を調整します。調整している間、**自分にだけ見える球体**が出るので、それを目安にしてください。
- 心拍数手動調整: 心拍数を手動で変更します。50~177の範囲で設定できます。
- (OSCプレハブのみ) OSC自動制御: 心拍数の自動制御を切り替えます。OSC信号を受信した場合は自動的にオンになります。（受信中オフも可能）

## 既知の不具合
<hr/>
### 不具合が発生するアバター

[龍のヨルちゃん](https://skd-noratama.booth.pm/items/3923094)  
瞬きレイヤーと干渉します。アバター側で正しくアニメーションが設定されていないことが原因です。
<details>
<summary>解決方法</summary>

1. アバターのFXレイヤーに指定されているアニメーターを開き、Blinkレイヤーを開きます。
1. プロジェクト上で右クリック→作成→アニメーションで適当なアニメーションを新しく作ります。（場所、名前は何でも良いです。）
1. Blinkレイヤーの「idol 0」ステートを選択し、「なし（モーション）」となっている欄に先ほど作成したアニメーションを指定します。

![](contents\Bugfix_a.png)
</details>

### 不具合が発生するギミック
[IntParameterCompressor](https://booth.pm/ja/items/5575099)
心拍数が他のプレイヤーに聞こえなくなります。  
Compressorを抜く必要があります（現時点で共存はできません）。

### その他の不具合
#### 心音が不規則に途切れる
- 他にアバターオーディオを再生している場合に発生することがあります。  
VRChat側でアバター内音源の同時再生数に制限が掛けられているため、回避が不可能です。他の音源を抜くか、常時再生しないようにしてください。

- HRToVRChatを使用している場合に発生することがあります。  
不明な原因によりOSC信号が途切れることがあります。時間経過で解消することがあります。

#### OSCは受信しているが、心拍計が出てこない/心音が鳴らない
- 本マニュアルに記載していないOSC送信アプリを使用すると発生する場合があります。OSCアドレスの違いが原因です。なるべくマニュアルに記載しているものを使用してください。

- 発生条件は不明です。無改変アバターでも動作しなかったため、プロジェクトを作り直すと解消しました。

## トラブルシューティング
<hr/>
各項目を全てクリアしても直らなければバグです。BoothでDMを送ってください。
導入でお困りの場合もお気軽にご連絡ください。
:::note
連絡の際は、使用しているアバター、その他に導入しているギミック（衣装含む）の情報を併記していただけると大変助かります。  
また、無改変の状態で心音ギミックのみの導入もお試しください。   
素早い問題解決のためにもご協力をお願いします。
:::

### 心音が聞こえない/心拍数カウンターが表示されない
- 心拍数手動制御が0%ではない
- メニューの「心音」と「自分の心音(ローカル)」がどちらもオンになっているが聞こえない
- 心拍数カウンターが正しく配置されている、体に埋もれていない
- アバター音量が100%になっている
- 他のワールドでも聞こえない（一部ワールドでは音がかき消されることがあります）
- 無改変状態でギミックのみを入れても動作しない

### OSC信号が反映されない
- VRChat内のパイメニュー→オプション→OSCのところへ行き、OSCを有効にしている。
- さらにOSC Debugを選択すると、下にHRと書かれている青い正方形の枠が点滅している。  
→Not receiving  any OSC messages?と表示されたら、送信に失敗しています。
- (Pulsoidの場合)関連する全てのプログラムが起動している(スマートウォッチのPulsoid、スマホのPulsoid、HRtoVRChat)
- HRtoVRChatは設定を変更しないとVRChatの前にSTART出来ず、エラーが表示されます。
- (Bluetooth LEの場合)ウィンドウに数字が表示されている。
- ウィンドウを消した場合、タスクバーのシステムトレイに小さいアイコンがあるのでそこから再表示できます。ない場合はアプリを再起動します。

## パラメーターについて
<hr/>
- HR (OSCのみ)  
心拍数のInt値。0～255まで。  
**改変におすすめです。** 寝落ち判定など、一定の心拍数を条件にするなどのギミックを組む際におすすめです。

- HBG/HRCounter_Bool  
心拍計を表示するかどうかのBool値。

- HBG/Sound_Bool  
心音を再生するかどうかのBool値。

- HBG/SoundRadius_Float  
心音の聞こえる範囲を調整するためのFloat値。

- HBG/ManualHR_Float  
心拍数をラジアルパペットで操作するためのFloat値。心拍数50～177の範囲で0～1に変換します。  
(改変はなるべく下のHBG/Local_FullHR_Floatを使用してください)

- HBG/HRCounterFlash_Bool  
心拍計を明滅させるかどうかのBool値。

- HBG/AutoControlHR_Bool (OSCのみ)  
OSC信号で心拍数をコントロールするかのBool値。

Local_ の接頭辞がついているものはローカル動作です。

- HBG/Local_AdjustingRadius_Bool  
心音範囲を変更中かどうかのBool値。音源範囲を示す球の表示に使われます。

- HBG/Local_FullHR_Float
HRが0～1の範囲に変換されたFloat値。高精度で同期されます。  
**改変におすすめです。** 顔の赤みを変えるなど、心拍数に比例したギミックなどを組む際に使用できます。

- HBG/Local_Mute_Bool
自分の心音をミュートにするかどうかのBool値。

- HBG/Local_ListenOwnHB_Bool  
自分の心音を聞くかどうかのBool値。

- HBG/Local_nSoundRadius  
アバタースケーリングに心音範囲を追従させるために使われます。

- HBG/Local_nBeatTime
心音の再生時間を正規化した数値が入ります。  
**改変におすすめです。** アニメーションのMotion Timeに使用することで、任意のアニメーションを心音に合わせて再生することができます。

- ScaleFactor  
VRChat標準パラメータ。アバタースケーリングでの整合性を保つために使用されます。

- Blend  
Direct Blend Tree (DBT) を有効化するために使われます。

## 更新履歴
<hr/>
2024/6/19 v2.0.3
- 心音B1と同一ファイルになっていた心音C1を本来のものに差し替え
- 心音Dの心拍数約100以上で発生していたクリップノイズを修正

2024/6/17 v2.0.2
- 音源B, Dのクリップノイズを解消
- 音源の圧縮形式を無圧縮(PCM)に変更
- 音源を非正規化設定で統一
- OSCプレハブでピッチ変更が適用されていなかったミスを修正

2024/6/16 v2.0.1
- アバター読み込み後の待機時間を再び追加

2024/6/16 v2.0.0
- 心音を新たに3種類追加
- 音源再生時にピッチを一定の範囲内でランダムに変化させるように変更
- アバタースケーリングに対応
- 親オブジェクトの不均一なスケール変更に対応
- Direct Blend Treeを用いてCPU負荷を軽減
- パラメータ計算にContactではなくAnimated Animator Parameterを使用
- Audio Sourcesオブジェクトを直接配置する形式に変更
- パラメータ名の変更・整理
- アバター読み込み時の再生待機時間を解消
- OSCプレハブのプレハブ名を変更
- 音源範囲表示用球のシェーダーを変更

2024/3/21 v1.1.0
- 音源の追従に関する不具合を修正
- 導入手順を簡素化
- 利用規約をVN3ライセンスに変更(効力の違いはありません)

2024/3/13 v1.0.2
- 心拍数カウンターの数値が1未満の場合は表示しないように

2024/1/10
- マニュアルを修正

2023/12/13 v1.0.1
- 心拍数が0の時にアニメーションがおかしくなっていたバグを修正
- OSCプレハブの自動制御切り替え状態を保存しないように変更

2023/12/10 v1.0.0
- 初期リリース