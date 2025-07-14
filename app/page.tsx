import { ArrowRight, CheckCircle, Users, Zap, Shield, BarChart3, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      {/* ── Logo ─────────────────────────────── */}
      <Image
        src="/logo.png"        // ← public/logo.png
        alt="LaboProtocol logo"
        width={32}             // w-8 (8 × 4 px)
        height={32}            // h-8
        className="rounded-lg" // 角丸を維持
        priority
      />
      <span className="font-bold text-xl">LaboProtocol</span>
    </div>

    <nav className="hidden md:flex items-center space-x-8">
      <a
        href="#features"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        機能
      </a>
      <a
        href="#pricing"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        料金
      </a>
      <a
        href="#about"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        会社概要
      </a>
      <Button variant="outline" size="sm">
        ログイン
      </Button>
      <Button size="sm">無料で始める</Button>
    </nav>
  </div>
</header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 新機能：AI搭載プロトコル最適化</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            研究を加速する
            <br />
            次世代ラボプロトコル
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            複雑な実験解析を簡単に管理・共有・最適化。AIが支援する革新的なプラットフォームで、
            研究チームの生産性を飛躍的に向上させます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              無料デモを見る
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
              14日間無料トライアル
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">研究現場の深刻な課題</h2>
            <p className="text-gray-600 text-lg">多くの研究チームが直面している非効率性を解決します</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 text-red-600 font-bold">
                    1
                  </span>
                  プロトコルの散在
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Excel、Word、紙のノートに散らばったプロトコル。必要な情報を見つけるのに平均45分かかり、
                  実験の再現性に深刻な影響を与えています。
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 font-bold">
                    2
                  </span>
                  知識の属人化
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  ベテラン研究者の退職や異動により、貴重な実験ノウハウが失われる。
                  新人研修に6ヶ月以上かかり、研究効率が大幅に低下。
                </p>
              </CardContent>
            </Card>
            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-700 flex items-center">
                  <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 text-yellow-600 font-bold">
                    3
                  </span>
                  コラボレーション不足
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  チーム間での情報共有が困難。同じ実験を複数回繰り返し、
                  研究リソースの無駄遣いが年間数百万円規模で発生。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">LabProtocolが提供する革新的ソリューション</h2>
            <p className="text-gray-600 text-lg">AIとクラウドテクノロジーで研究を次のレベルへ</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI搭載プロトコル最適化</h3>
                    <p className="text-gray-600">
                      機械学習アルゴリズムが過去の実験データを分析し、最適な条件を自動提案。
                      実験成功率を平均40%向上させます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">リアルタイムコラボレーション</h3>
                    <p className="text-gray-600">
                      世界中のチームメンバーと同時編集・コメント・レビューが可能。 研究の透明性と再現性を大幅に向上。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">高度な分析・レポート</h3>
                    <p className="text-gray-600">
                      実験データの自動集計・可視化により、研究トレンドを即座に把握。 論文執筆時間を50%短縮します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">HPLC Protocol v2.3</h4>
                  <Badge className="bg-green-100 text-green-700">最適化済み</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>成功率</span>
                    <span className="font-semibold text-green-600">94.2% (+12%)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>実行時間</span>
                    <span className="font-semibold text-blue-600">2.5h (-30min)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>コスト効率</span>
                    <span className="font-semibold text-purple-600">¥1,200 (-¥400)</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-500">AI提案: 温度を2°C下げることで成功率向上</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">研究を変革する機能</h2>
            <p className="text-gray-600 text-lg">世界トップクラスの研究機関が選ぶ理由</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "エンタープライズセキュリティ",
                description: "ISO27001準拠、SOC2認証取得。研究データを最高レベルで保護",
              },
              {
                icon: Zap,
                title: "高速検索・フィルタリング",
                description: "数百のプロトコルから瞬時に目的の手順を検索・抽出",
              },
              {
                icon: Users,
                title: "権限管理・承認フロー",
                description: "研究段階に応じた柔軟な権限設定と承認ワークフロー",
              },
              {
                icon: BarChart3,
                title: "統計分析・予測モデル",
                description: "実験結果の統計解析と成功確率の予測機能",
              },
              {
                icon: CheckCircle,
                title: "品質管理・監査証跡",
                description: "GLP/GMP準拠の完全な監査証跡と品質管理機能",
              },
              {
                icon: ArrowRight,
                title: "外部システム連携",
                description: "外部APIシステムとのシームレス連携",
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof 
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">世界の研究機関が信頼</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="font-semibold text-gray-600">東京大学</span>
            </div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="font-semibold text-gray-600">理研</span>
            </div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="font-semibold text-gray-600">京都大学</span>
            </div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="font-semibold text-gray-600">産総研</span>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,000+</div>
              <div className="text-gray-600">研究機関</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">研究者</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-gray-600">プロトコル</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">研究の未来を今すぐ体験</h2>
          <p className="text-xl mb-8 opacity-90">
            14日間の無料トライアルで、あなたの研究がどれだけ効率化されるかを実感してください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              無料トライアルを開始
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              デモを予約
            </Button>
          </div>
   
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
<footer className="bg-gray-900 text-white py-12 px-4">
  <div className="container mx-auto max-w-6xl">
    <div className="grid md:grid-cols-4 gap-8">
      {/* ── ロゴ & キャッチコピー ───────────────────────── */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          {/* ここを画像に差し替え */}
          <Image
            src="/logo.png"        // public/logo.png
            alt="LaboProtocol logo"
            width={32}             // w-8
            height={32}            // h-8
            className="rounded-lg"
            priority
          />
          <span className="font-bold text-xl">LaboProtocol</span>
        </div>
        <p className="text-gray-400 text-sm">
          研究を加速する次世代ラボプロトコルプラットフォーム
        </p>
        </div>
            <div>
              <h4 className="font-semibold mb-4">製品</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    機能
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    料金
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    統合
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ヘルプセンター
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    トレーニング
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    コミュニティ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    採用情報
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    プライバシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 LaboProtocol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
